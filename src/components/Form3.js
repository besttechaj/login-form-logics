import React, { useState } from 'react';
import '../styles/Form1.css';
const Form3 = () => {
  //initializing the state with just one state
  const [newEntry, setNewEntry] = useState({
    title: '',
    description: '',
    tag: '',
    mobile: '',
    email: '',
    password: '',
  });

  //handling on-change event handler
  const inputData = (e) => {
    //accessing the value which will be used to update our state
    const fetchedInputName = e.target.name;
    const fetchedInputValue = e.target.value;

    console.log(fetchedInputName);
    console.log(fetchedInputValue);

    // updating the state
    setNewEntry((prevData) => {
      return { ...prevData, [fetchedInputName]: fetchedInputValue };
    });
  };
  return (
    <>
      <form>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Title
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            value={newEntry.title}
            onChange={inputData}
            name='title'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Description
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleInputPassword1'
            value={newEntry.description}
            onChange={inputData}
            name='description'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Tag
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleInputPassword1'
            value={newEntry.tag}
            onChange={inputData}
            name='tag'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            Mobile
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleInputPassword1'
            value={newEntry.mobile}
            onChange={inputData}
            name='mobile'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-control'
            id='exampleInputPassword1'
            value={newEntry.email}
            onChange={inputData}
            name='email'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='exampleInputPassword1' className='form-label'>
            password
          </label>
          <input
            type='password'
            className='form-control'
            id='exampleInputPassword1'
            value={newEntry.password}
            onChange={inputData}
            name='password'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
      <h4>{newEntry.title}</h4>
      <h4>{newEntry.description}</h4>
      <h4>{newEntry.email}</h4>
      <h4>{newEntry.mobile}</h4>
      <h4>{newEntry.password}</h4>
    </>
  );
};

export default Form3;
