import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidation } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/contants';


const Login = () => {
    const dispatch = useDispatch();

    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef();
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignIn = () => {
        setIsSignIn(!isSignIn);
    }

    const validate = () => {

        console.log(email);
        console.log(password);

        const message = checkValidation(email.current.value, password.current.value);
        setErrorMessage(message);

        if (message !== null) return message;

        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR
                    })
                        .then(() => {
                            // See the UserRecord reference doc for the contents of userRecord.
                            console.log('Successfully updated user');
                            const { uid, email, displayName, photoURL } = auth.currentUser;
                            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                        })
                        .catch((error) => {
                            setErrorMessage(error);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    setErrorMessage(errorCode + " - " + errorMessage);
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: 'https://avatars.githubusercontent.com/u/88475404?v=4'
                    })
                        .then(() => {
                            // See the UserRecord reference doc for the contents of userRecord.
                            console.log('Successfully updated user');
                            const { uid, email, displayName, photoURL } = auth.currentUser;
                            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                        })
                        .catch((error) => {
                            setErrorMessage(error);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage);
                });
        }
    }

    return (
        <>
            <div >
                <Header />
                <div className='absolute'>
                    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
                </div>

                <form onSubmit={(e) => e.preventDefault()} className='absolute mx-auto my-36 right-0 left-0 bg-black p-12 w-3/12 text-white bg-opacity-75'>
                    <h1 className='font-bold text-3xl py-4'>{!isSignIn ? "Sign up" : "Sign in"}</h1>
                    {!isSignIn && <input ref={name} type='text' placeholder='Full Name' className='py-2 my-2 w-full bg-gray-700' />}
                    <input type='text' ref={email} placeholder='email' className='py-2 my-2 w-full bg-gray-700' />
                    <input type='password' ref={password} placeholder='password' className='py-2 my-2 w-full bg-gray-700' />
                    <p className='text-red-500'> {errorMessage}</p>
                    <button type='submit' className='py-2 my-4 w-full bg-red-700' onClick={validate}> {!isSignIn ? "Sign up" : "Sign in"}</button>

                    <p onClick={toggleSignIn} >{!isSignIn ? "Already a User? Sign in" : "New to Netflix? Sign Up Now"}</p>
                </form>
            </div>
        </>

    )
}

export default Login