'use client'
import axios from 'axios';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from './ui/button';

// Define your Footer component
const Footer = () => {
  // State to store the value of the input field
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  // Function to handle changes in the input field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleSend = async () => {
    setLoading(true);
    console.log('Sending input value:', inputValue);
    const res = await axios.post('http://127.0.0.1:5000/prompt/', {
      'prompt' : inputValue
    });
    console.log(res);
    alert(res.data);
    setInputValue('');
    setLoading(false);
  };

  return (
    <div className={cn('sticky bottom-0 z-30 w-full bg-gray-100')}>
      <div className="flex items-center justify-between px-4 py-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter your message..."
          className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none"
        />
        <Button onClick={handleSend}>
            { loading ? "Loading.." : "Submit" }
        </Button>
      </div>
    </div>
  );
};

export default Footer;
