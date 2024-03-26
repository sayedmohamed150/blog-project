import React, { useState } from 'react'

const CommentForm = ({ btnLabel }) => {
const [value, setValue] = useState("second")

const submitHandler = (e) => {
    e.preventDefault ()
};

  return (
    <form onSubmit={submitHandler}>
        <div>
            <textarea 
            className='w-full focus:outline-none' 
            rows="5" 
            placeholder='Leave your comment here...' 
            value={value} 
            onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className='px-6 py-2.5 rounded-lg bg-primary text-white font-semibold mt-2'>{btnLabel}</button>
        </div>
    </form>
  )
}

export default CommentForm