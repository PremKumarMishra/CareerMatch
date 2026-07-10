import React, { useState } from 'react'

const InputField = ({ id, name, label, type, placeholder }) => (
  <div className='flex flex-col gap-3.5'>
    <label className='text-gray-400 font-medium text-xs uppercase'
      htmlFor={id}
    >{label}
    </label>
    <input
      className='w-full focus:outline-none focus:border-emerald-500 transition-all duration-150 ease-in-out bg-[#121214] border border-[#2A2A32] rounded-lg text-gray-200 placeholder-gray-600 px-4 py-1'
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      required
    />
  </div>
)

const LoginPanel = () => {
  const [activeTab, setActiveTab] = useState("login")

  const loginFields = [
    { id: 'loginEmail', name: 'email', label: 'Email', type: 'email', placeholder: 'Enter Email' },
    { id: 'loginPassword', name: 'password', label: 'password', type: 'password', placeholder: 'Enter password' }
  ]

  const signupFields = [
    { id: 'signupEmail', name: 'email', label: 'Email', type: 'email', placeholder: 'Enter Email' },
    { id: 'signupPassword', name: 'password', label: 'password', type: 'password', placeholder: 'Enter Password' },
    { id: 'confirmPassword', name: 'password', label: 'confirm password', type: 'password', placeholder: 'Confirm Password' }
  ]

  const isLogin = activeTab === "login"

  return (
    < div className='h-dvh w-full flex' >
      <div className='m-auto w-[90%] sm:w-auto sm:min-w-1/3 flex flex-col justify-center bg-[#121214] border border-[#2A2A32] rounded-2xl shadow-[0_0_35px_rgba(0,0,0,0.9)] p-3 gap-4'>

        {/* Tabs switcher */}
        <div className='flex bg-[#1E1E24] p-1 rounded-xl mb-1'>
          <button
            className={`w-1/2 transition-all duration-150 ease-in-out text-sm py-2 rounded-lg font-medium cursor-pointer ${isLogin ? 'bg-emerald-500/90 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
            id="loginTab"
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`w-1/2 transition-all duration-150 ease-in-out text-sm py-2 rounded-lg font-medium cursor-pointer ${!isLogin ? 'bg-emerald-500/90 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
            id="signinTab"
            onClick={() => setActiveTab("signup")}
          >
            SignUp
          </button>
        </div>

        {/* Dynamic form content */}
        <form className='flex flex-col p-3 gap-3.5'>
          {/* Loop over fields depending on state */}
          {(isLogin ? loginFields : signupFields).map((field) => (
            <InputField
              label={field.label}
              type={field.type}
              id={field.id}
              name={field.name}
              placeholder={field.placeholder}
            />
          ))}
          {/* Action button */}
          <button
            className='w-full bg-emerald-500 rounded-xl hover:bg-emerald-600 text-neutral-900 font-bold py-2 cursor-pointer transition-all duration-150 ease-in-out mt-2'
            type='submit'
          >
            {isLogin ? 'Login' : 'SignUp'}
          </button>
        </form>
      </div>
    </div >
  )
}

export default LoginPanel
