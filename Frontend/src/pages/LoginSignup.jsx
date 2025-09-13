import React, { useState } from 'react'

const LoginSignup = () => {

  const [curr, setCurr] = useState('login')

  const register = () => {
    if(curr === 'login'){
      setCurr('register')  
    }
    else{
      setCurr('login')  
    }
  }

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="w-full max-w-md space-y-8 rounded-2xl bg-white p-8 shadow-md">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500">
              <span className="text-2xl text-white font-bold">G</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="mt-4 text-center text-2xl font-bold text-gray-900">
            {curr === 'login' ? 'Login' : 'Create your Account'}
          </h2>


          {/* Form */}
          <form className="mt-8 space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
              />
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
            >
              {curr === 'login' ? 'Log In' : 'Signup'}
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-sm text-gray-600">
            {curr === 'login' ? 'Do not have Account ?' : 'Already Registered ?'}
            <a onClick={register} className="cursor-pointer font-medium text-blue-600 hover:text-blue-500">
              {curr === 'login' ? 'Create Account' : 'Login'}
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default LoginSignup
