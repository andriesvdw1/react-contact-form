import React from 'react'
import {useForm} from 'react-hook-form';
function ContactForm() {
  const { register, handleSubmit, formState } = useForm();  
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
        <h1>Contact me:</h1>
        <label htmlFor="inputMessage"></label>
        <input {...register('inputMessage', {required: true})}
        type="text" placeholder='message' id='inputMessage' />
        <button type='submit'>Send</button>
    </form>
  );
};

export default ContactForm