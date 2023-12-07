import {useState} from 'react'
import "./Auth.css"

export const Auth = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    setIsValid(isValidEmail);
    return isValidEmail;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail();
    if (isEmailValid) {
      window.location.href = 'https://app.loch.one/welcome';
    }
  };

    

  return (
    <div className='authContainer' >
        <form className='authForm' onSubmit={handleSubmit} noValidate>
            <h3 className='authHeader'>Sign up for exclusive access.</h3>
            <input 
            type='email' 
            placeholder='Your email address here'
            className='textfield'
            onChange={(e)=>setEmail(e.target.value)}
            
            />
            {!isValid && <p style={{color:"red"}}>Please enter a valid email address.</p>}
            <button type='submit' className='submitBtn'>Get Started</button>
            <p className='text'>You'll receive an email with an invite link to join.</p>
        </form>
    </div>
  )
}


