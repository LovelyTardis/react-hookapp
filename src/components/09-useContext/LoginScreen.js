import React, { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from './UserContext';

export const LoginScreen = () => {
  const {user, setUser} = useContext(UserContext);

  let newUser = {
    id: 0,
    name: 'Albert'
  }
  return (
    <div>
        <h1>LoginScreen</h1>
        <hr />
        <button
          onClick={ () => {
            setUser(newUser);
          }}
        >
            Login
        </button>
    </div>
  )
}
