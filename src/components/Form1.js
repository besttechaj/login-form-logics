import React, { useState } from 'react';
import '../styles/Form1.css';
const Form1 = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //to store multiple data after submitting button
  const [newEntry, setNewEntry] = useState([]);

  //running function after form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && description && tag && mobile && email && password) {
      //storing the inputs values inside object
      const objDataForm = {
        title: title,
        description: description,
        tag: tag,
        mobile: mobile,
        email: email,
        password: password,
      };
      //passing that object to an array to store the data in the form of Array's of object using spread operator
      setNewEntry([...newEntry, objDataForm]);

      //resetting the input fields
      setTitle('');
      setDescription('');
      setTag('');
      setEmail('');
      setMobile('');
      setPassword('');
    } else {
      alert('No input should be Empty');
      console.log('please fill all the fields');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='exampleInputEmail1' className='form-label'>
            Title
          </label>
          <input
            type='text'
            className='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
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
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
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
            value={tag}
            onChange={(e) => {
              setTag(e.target.value);
            }}
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
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
      <div>
        {newEntry.map((element) => {
          return (
            <>
              <h1>{element.title}</h1>
              <h1>{element.description}</h1>
              <h1>{element.tag}</h1>
              <h1>{element.email}</h1>
              <h1>{element.password}</h1>
              <h1>{element.mobile}</h1>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Form1;
