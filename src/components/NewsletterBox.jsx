import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (e) => {
        e.preventDefault(); // stop reload webpage
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>
            Subscribe now & get 20%
        </p>
        <p className='text-gray-400 mt-3'>
            <form 
                onSubmit={onSubmitHandler}
                className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                <input 
                    type="email" 
                    placeholder='Enter your email'
                    className='w-full sm:flex-1 outline-none'
                />
                <button type='submit' className='bg-black hover:bg-gray-700 cursor-pointer text-white text-xs px-10 py-4'> SUBSCRIBE</button>
            </form>
        </p>
    </div>
  )
}

export default NewsletterBox