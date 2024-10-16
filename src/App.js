import React, { useRef, useState } from 'react';
import './App.css'
import icons from './asests/icons.png'
import side from './asests/side.png'

function App() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({}); // Reset errors

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    const newErrors = {};

    if (!name) newErrors.name = 'Name is required';
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Email is not valid';
    }
    if (!password) newErrors.password = 'Password is required';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert(`Submitted Information:\nName: ${name}\nEmail: ${email}\nPassword: ${password}`);
      console.log({ name, email, password });
      nameRef.current.value = '';
      emailRef.current.value = '';
      passwordRef.current.value = '';
      confirmPasswordRef.current.value = '';
    }
  };

  return (
    <div className='flex inter  max-h-screen bg-[#EBEFFF]' >
      <div>
<img className='h-[650px] w-[600px]' src={side} alt=" " />
      </div>
      <div className=' inter flex flex-col justify-center items-center w-[50vw]' >
      <h2 className='  font-bold text-[32px] mb-8 ' >Please Fill out form to Register!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Full name:
            <br/>
            <input type="text" ref={nameRef} />
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          </label>
        </div>
        <div>
          <label>
            Email:
            <br/>

            <input type="email" ref={emailRef} />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </label>
        </div>
        <div>
          <label>
            Password:
            <br/>

            <input type="password" ref={passwordRef} />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
          </label>
        </div>
        <div>
          <label>
            Confirm Password:
            <br/>

            <input type="password" ref={confirmPasswordRef} />
            {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
          </label>
        </div>
        <button type="submit">Register</button>
        <div className=' flex justify-center'>
        <span>Yes i have an account?  <b> Login </b></span>

        </div>

        <div className=' flex justify-center  mt-2'>
          <img src={ icons} alt=" " />
        </div>
      </form>
      </div>
      
     
    </div>
  );
}

export default App;