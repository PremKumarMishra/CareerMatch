import React,{useState} from 'react'


const LoginPanel = () => {
    const [activeTab,setActiveTab] = useState("login")
  return (
    <div className='h-screen w-full flex items-center justify-center bg-transparent'>
        <div className='min-w-1/3 min-h-2/5 flex flex-col justify-start bg-[#121214] border border-[#2A2A32] rounded-2xl shadow-[0_0_35px_rgba(0,0,0,0.9)] px-3 py-2.5 gap-4'>
            <div className='flex bg-[#1E1E24] p-1 rounded-xl mb-1'>
                <button className={`w-1/2 transition-all text-sm py-2 rounded-lg font-medium  cursor-pointer ${activeTab === "login" ? 'bg-emerald-500/90 text-white shadow-md' : 'text-gray-400 hover:text-white'}`} id="loginTab" onClick={() => setActiveTab("login")}>Login</button>
                <button className={`w-1/2 transition-all py-2 text-sm rounded-lg font-medium cursor-pointer ${activeTab === "signup" ? 'bg-emerald-500/90 text-white shadow-md' : 'text-gray-400 hover:text-white'}`} id="signinTab" onClick={() => setActiveTab("signup")}>SignUp</button>
            </div>

            {/* Login */}
            {
                activeTab === "login" && (
                    <div className='flex flex-col uppercase p-3 gap-3.5'>
                        <div className='flex flex-col gap-3.5'>
                            <h4 className='text-gray-400 font-medium text-xs'>email</h4>
                            <input className='w-full focus:outline-none focus:border-emerald-500 transition-all bg-[#121214] border border-[#2A2A32] rounded-lg text-gray-200 placeholder-gray-600 px-4 py-1' type="email" placeholder='Enter Email'/>
                        </div>
                        <div className='flex flex-col gap-3.5 uppercase'>
                            <h4 className='text-gray-400 font-medium text-xs'>password</h4>
                            <input className='w-full focus:outline-none focus:border-emerald-500 transition-all bg-[#121214] border border-[#2A2A32] rounded-lg text-gray-200 placeholder-gray-600 px-4 py-1' type="password" placeholder='Enter password'/>
                        </div>
                        {/* <button className='cursor-pointer bg-[#1E1E24] hover:bg-[#2A2A32] border border-[#2A2A32] transition-all rounded-xl text-gray-300 px-5.5 py-1.5 text-[14px] font-semibold'>Login</button> */}
                        <button className='flex justify-center items-center gap-2 w-full bg-emerald-500 rounded-xl hover:bg-emerald-600 text-neutral-900 font-bold py-2 cursor-pointer transition-all'>Login</button>
                    </div>
                )
            }

            {/* SignUp */}
            {
                activeTab === "signup" && (
                    <div id="signContainer" className='flex flex-col uppercase p-3 gap-3.5'>
                        <div className='flex flex-col gap-3.5'>
                            <h4 className='text-gray-400 font-medium text-xs'>email</h4>
                            <input className='w-full focus:outline-none focus:border-emerald-500 transition-all bg-[#121214] border border-[#2A2A32] rounded-lg text-gray-200 placeholder-gray-600 px-4 py-1' type="email" placeholder='Enter Email'/>
                        </div>
                        <div className='flex flex-col gap-3.5'>
                            <h4 className='text-gray-400 font-medium text-xs'>password</h4>
                            <input className='w-full focus:outline-none focus:border-emerald-500 transition-all bg-[#121214] border border-[#2A2A32] rounded-lg text-gray-200 placeholder-gray-600 px-4 py-1' type="password" placeholder='Enter Password'/>
                        </div>
                        <div className='flex flex-col gap-3.5'>
                            <h4 className='text-gray-400 font-medium text-xs'>confirm password</h4>
                            <input className='w-full focus:outline-none focus:border-emerald-500 transition-all bg-[#121214] border border-[#2A2A32] rounded-lg text-gray-200 placeholder-gray-600 px-4 py-1' type="password" placeholder='Confirm Password'/>
                        </div>
                        <button className='flex justify-center items-center gap-2 w-full bg-emerald-500 rounded-xl hover:bg-emerald-600 text-neutral-900 font-bold py-2 cursor-pointer transition-all'>SignUp</button>
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default LoginPanel
