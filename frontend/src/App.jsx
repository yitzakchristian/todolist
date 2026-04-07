import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const registerUser = async () => {
    try {
      const response = await axios.post('/api/users/register', {
        email, password
      });

    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message || 'unknown error');
      }
    };
  };

  return (
    <>
      <header className='p-5 border-b'>
        <h1 className='font-semibold text-2xl'>
          Register User
        </h1>
      </header>

      <main className='p-5'>
        <div className='space-y-2.5 mb-5'>
          <input
            type="email"
            placeholder='Enter your email'
            className='border p-2.5 w-full'
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder='Enter your password'
            className='border p-2.5 w-full'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className='bg-black w-full text-white p-3.5 cursor-pointer mb-2.5'
          onClick={registerUser}
        >
          Register
        </button>

        {errorMessage && <p className='text-center text-red-500'>{errorMessage}</p>}
      </main>
    </>
  )
}

export default App