"use client";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { dir } from "console";
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#15e49f',
    },
    secondary:{
      main: '#ffffff',
    }
  },
});

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone: '',
        company: '',
      });
    
      const handleChange = (e : any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e : any) => {
        e.preventDefault();
        // Handle form submission here (see Backend section)
      };

  return (
    <ThemeProvider theme={darkTheme}>
    <Box
        component="form"
        className="flex flex-col gap-2 mx-auto w-64 smlr:w-72 sm:w-96 mt-8 lg:mt-0 "
        
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          required
          id="name"
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          required
          id="email"
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          
          id="phone"
          name="phone"
          label="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <TextField
          
          id="company"
          name="company"
          label="Company"
          value={formData.company}
          onChange={handleChange}
        />
        <TextField
          required
          id="message"
          name="message"
          label="Message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
        />
        <Button type="submit" variant="outlined" disabled={true}>
          Submit
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default ContactForm;
