import React, { useEffect } from 'react'
import { LOGO } from '../utils/contants'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  console.log("USER : ", user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/')
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/');
      }

      return () => unsubscribe;
    });
  }, [])

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
      <img className='w-44 mx-auto md:mx-0' src={LOGO} />

      {user &&
        <div className="flex p-2 justify-between">
          {/* <h4 className='bg-red-700 text-white'>{user?.displayName}</h4> */}
          <img className='hidden md:block w-12 h-12' src={user?.photoURL} />
          <button className='bg-red w-8 h-6 mx-4' onClick={handleSignOut}>Sign Out</button>
        </div>
      }
    </div>
  )
}

export default Header