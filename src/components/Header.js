import React from 'react'
import { LOGO } from '../utils/contants'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';

const Header = () => {
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

  return (
    <div className='absolute z-10'>
      <img className='py-8 w-36 bg-gradient-to-b from-black' src={LOGO} />

      {user &&
        <div>
          <h4 className='bg-red-700 text-white'>{user?.displayName}</h4>
          <img className='w-4 h-4' src={user?.photoURL} />
          <button className='bg-red w-8 h-6' onClick={handleSignOut}>Sign Out</button>
        </div>
      }
    </div>
  )
}

export default Header