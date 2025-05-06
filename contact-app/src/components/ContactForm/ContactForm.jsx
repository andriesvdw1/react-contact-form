import React from 'react'
import {useForm} from 'react-hook-form';
import './ContactForm.css';
function ContactForm() {
  const { register, handleSubmit, formState } = useForm();  
  const onSubmit = async (data) => {
    console.log(data); {/*//this is working*/}
  };
  return (
    <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
        <h1>Contact me:</h1>
        <label htmlFor="inputMessage"></label>
        <input {...register('inputMessage', {required: true})}
        className='input-message'
        type="text" placeholder='message' id='inputMessage' />
        <button type='submit'>Send</button>
    </form>
  );
};

export default ContactForm