import React from 'react';
import { Link } from "react-router-dom";
import MainLayout from '../../components /MainLayout';

const RegisterPage = () => {

const submitHandler = () => {}

  return (
    <MainLayout>
        <section className='container mx-auto px-5 py-10'>
           <div className='w-full max-w-sm mx-auto'>
              <h1 className='font-roboto text-2xl font-bold text-center text-dark-hard mb-8'>Sign up</h1>
              <form onSubmit={submitHandler}> 
                <div className='flex flex-col mb-6 w-full'>
                  <label htmlFor="name" className='text-[#5a7184] font-semibold block text-left'>Name</label>
                  <input type="text" id="name" placeholder='Enter name' className='placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]'/>
                </div>
                <div className='flex flex-col mb-6 w-full'>
                  <label htmlFor="name" className='text-[#5a7184] font-semibold block text-left'>Email</label>
                  <input type="text" id="name" placeholder='Enter email' className='placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]'/>
                </div>
                <div className='flex flex-col mb-6 w-full'>
                  <label htmlFor="password" className='text-[#5a7184] font-semibold block text-left'>Password</label>
                  <input type="password" id="password" placeholder='Enter password' className='placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]'/>
                </div>
                <div className='flex flex-col mb-6 w-full'>
                  <label htmlFor="confirmPassword" className='text-[#5a7184] font-semibold block text-left'>Confirm Password</label>
                  <input type="confirmPassword" id="confirmPassword" placeholder='Enter confirm Password' className='placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9]'/>
                </div>
                <Link to="/forget-password" className='text-left font-semibold text-primary '>
                Forgot password?
                </Link>
                <button type='submit' className='bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6'>
                  Register
                </button>
              </form>
           </div>
           
        </section>
    </MainLayout>
  )
}

export default RegisterPage