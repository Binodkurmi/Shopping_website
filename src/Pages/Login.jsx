import React, { useState } from 'react';

const Login = () => {
	const [currentstate, setCurrentState] = useState('Sign up');
	const onSubmitHandler = async(event)=>{
		event.preventDefault();
	}

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[85%] sm:w-[70%] md:w-[60%] lg:w-[40%] bg-white shadow-lg rounded-lg p-6 backdrop-blur-md bg-opacity-80 mt-20 mb-9'>
				
				{/* Header */}
				<div className='relative flex items-center gap-2'>
					<p className='text-2xl sm:text-3xl font-semibold text-gray-800'>{currentstate}</p>
					<hr className='border-none h-[2px] w-8 bg-gray-800'/>
				</div>

				{/* Input Fields */}
				<div className='w-full flex flex-col gap-4 mt-6'>
					{currentstate !== 'Login' && (
						<input 
							type="text" 
							className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none transition-all' 
							placeholder='Full Name' 
							required 
						/>
					)}
					<input 
						type='email' 
						className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none transition-all' 
						placeholder='Email Address' 
						required 
					/>
					<input 
						type='password' 
						className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black outline-none transition-all' 
						placeholder='Password' 
						required 
					/>

					{/* Forgot Password & Toggle */}
					<div className='flex justify-between text-sm text-gray-600'>
						<p className='cursor-pointer hover:text-black transition-all'>Forgot Password?</p>
						<p 
							onClick={() => setCurrentState(currentstate === 'Login' ? 'Sign up' : 'Login')} 
							className='cursor-pointer font-semibold hover:underline transition-all'
						>
							{currentstate === 'Login' ? 'Create an Account' : 'Login Here'}
						</p>
					</div>

					{/* Button */}
					<button 
						className='w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-900 transition-all mt-4'
					>
						{currentstate === 'Login' ? 'Sign In' : 'Sign Up'}
					</button>

					{/* Social Login */}
					<div className="flex items-center gap-2 text-sm text-gray-600 mt-3">
						<p className="w-full h-[1px] bg-gray-300"></p>
						<span>OR</span>
						<p className="w-full h-[1px] bg-gray-300"></p>
					</div>
					<button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-200 transition-all">
						<img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
						Continue with Google
					</button>
				</div>
			</form>
		</div>
	);
}

export default Login;
