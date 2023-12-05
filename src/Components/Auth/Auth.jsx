import React from 'react'
import "./Auth.css"

export const Auth = () => {
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        window.location.href = 'https://app.loch.one/welcome';
    }

  return (
    <div className='authContainer'>
        <form className='authForm' onSubmit={handleSubmit}>
            <h3 className='authHeader'>Sign up for exclusive access.</h3>
            <input 
            type='email' 
            placeholder='Your email address here'
            className='textfield'
            onChange={null}/>
            <button type='submit' className='submitBtn'>Get Started</button>
            <p className='text'>You'll receive an email with an invite link to join.</p>
        </form>
    </div>
  )
}


