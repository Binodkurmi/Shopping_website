import React, { useState } from 'react';

const Login = () => {
	const [currentstate, SetCurrentState] = useState('Login');

	return (
		<form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700'>
			{/* Header */}
			<div className='inline-flex items-center gap-2 mt-25'>
				<p className='prata-regular text-3xl'>{currentstate}</p>
				<hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
			</div>

			{/* Input Fields */}
			<div className='w-full flex flex-col pb-4 gap-3'>
				{currentstate==='Login' ? '' :<input type="text" className='w-full px-3 py-2 border border-gray-800 rounded-md' placeholder='Name' required />}
				<input type='email' className='w-full px-3 py-2 border border-gray-800 rounded-md' placeholder='Email' required />
				<input type='password' className='w-full px-3 py-2 border border-gray-800 rounded-md' placeholder='Password' required />
				<div className='w-full flex justify-between text-sm mt-[-8px]'>
					<p className='cursor-pointer'>Forgot your password?</p>
					{
						currentstate==='Login'
						?<p onClick={()=>SetCurrentState('Sign up')}>Create account</p>
						:<p onClick={()=>SetCurrentState('Login')}>Login Here</p>
					}
				</div>
			</div>
		</form>
	);
}

export default Login;
