import React, { useEffect } from 'react'
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/contants'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGpt } from '../utils/gptStore';
import { changeLanguage } from '../utils/configSlice'

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const gptOn = useSelector((store) => store.toggle.toggleValue)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/')
    });
  }

  const handleLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
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
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between '>
      <img className='w-44 mx-auto md:mx-0' src={LOGO} />

      {user &&
        <div className="flex p-2">
          {gptOn && <select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguage}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identfier} value={lang.identfier}>
                {lang.name}
              </option>
            ))}
          </select>}
          <h4 className='py-2 px-4 mx-4 my-2 bg-indigo-400 text-white rounded-lg' onClick={() => dispatch(toggleGpt())}>
            {gptOn ? "Home":"Search"}
          </h4>



          {/* <img className='hidden md:block w-12 h-12 hover:cursor-pointer' src={user?.photoURL} />
          <button className='bg-red w-10 h-6 mx-4 text-white' onClick={handleSignOut}>Sign_Out</button> */}

          <img
            className="hidden md:block w-12 h-12"
            alt="usericon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button>
        </div>
      }
    </div>
  )
}

export default Header