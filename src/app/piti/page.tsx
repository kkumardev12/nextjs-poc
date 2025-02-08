
"use client";
import React, { useState } from 'react';
import Image from "next/image";
import { Button, TextField, Stack } from "@mui/material";

const FormValidation = () => {
  // State to manage form inputs and validation messages
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Handle input changes
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validate the form
  const validateForm = () => {
    let isValid = true;
    let errorMessages = { name: '', email: '', password: '' };

    // Validate name
    if (!formData.name) {
      errorMessages.name = 'Name must be filled out';
      isValid = false;
    }

    // Validate email
    if (!formData.email) {
      errorMessages.email = 'Email must be filled out';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errorMessages.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Validate password
    if (!formData.password) {
      errorMessages.password = 'Password must be filled out';
      isValid = false;
    } else if (formData.password.length < 6) {
      errorMessages.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    setErrors(errorMessages);
    return isValid;
  };

  // Handle form submission
  const  handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateForm()) {

      let body ={
        name:formData.name,
        email:formData.email,
        password:formData.password
      }
      console.log("signup body", body);

      let name = formData.name;
      let email = formData.email;
      let password = formData.password;
      try{
        usergetApi(name, email, password);
      }catch(error){
        console.log("error", error);
      }

      // Process the form data here
      alert('Form submitted successfully!');
    }
  };

  async function usergetApi(name:any, email:any, password:any){
    const response =  await fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();
    console.log("regitration successfully");
  }

  return (

    <div className="pop1">
      <Image
        className="img5"
        src="/udemy8.webp"
        alt="img"
        width={638}
        height={723}
      />
      <div className="pop2">
        <h1>Sign up and start learning</h1>
        <form>
          <div>
            <label htmlFor="name"></label>

            <TextField
              placeholder='name'
              name="name"
              type="text"
              label="name"
              variant="outlined"
              fullWidth

              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          </div>
          <br /><br />
          <div>
            <label htmlFor="email"></label>

            <TextField
              type="text"
              placeholder='email'
              variant="outlined"
              name="email"
              label="email"
              onChange={handleInputChange}
              fullWidth
              value={formData.email}
            // onChange={handleInputChange}
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          </div>
          <br /><br />
          <div>
            <label htmlFor="password"></label>
            <TextField
              placeholder='password'
              name="password"
              type="text"
              label="password"
              variant="outlined"
              fullWidth
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
          </div>
          <br /><br />
          <Button variant="contained" className='btn1' onClick={handleSubmit} >
            Submit
          </Button>
        </form>
      </div>
    </div>


  );
};

export default FormValidation;