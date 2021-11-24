import React, { useState } from 'react';
import '../styles/Contact.css';


import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;


    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    } 
  };

  const handleFormSubmit = (e) => {
   
    e.preventDefault();


    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
      
      return;
     
    }
    alert(`Hello ${name}`);


    setMessage('');
    setEmail('');
    setName('');
  };

  return (
    <div>
      {/* <p>Hello {userName}</p> */}
      <form className="form">
      <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="name"
          placeholder="name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
        className="message"
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;

