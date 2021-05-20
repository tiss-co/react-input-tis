import React, { useState } from 'react';


import { Input, inputType } from 'react-input-tis';
import 'react-input-tis/dist/index.css';

const App = () => {
  const [value, setValue] = useState({
    text: '',
    password: '',
    number: '',
    email: '',
    date: '',
    time: '',
  });

  return (
    <div className='App'>
      <div className='Title'>React Input Tis</div>
      <div className='Row' >
        <Input
          containerClassName='Container'
          labelClassName='Label'
          inputClassName='Input'
          label='Text input:'
          placeholder='Input your text'
          value={value.text}
          type={inputType.text}
          roundedBorder={true}
          onChange={({ target: { value } }) => setValue(prev => ({
            ...prev,
            text: value
          }))}
          autoFocus={false}
          darkMode={false}
          minLength={2}
        />
        <Input
          containerClassName='Container'
          labelClassName='Label'
          inputClassName='Input'
          label='Password input:'
          placeholder='Input your password'
          value={value.password}
          type={inputType.password}
          roundedBorder={true}
          onChange={({ target: { value } }) => setValue(prev => ({
            ...prev,
            password: value
          }))}
          autoFocus={false}
          darkMode={false}
          minLength={4}
        />
      </div>
      <div className='Row' >
        <Input
          containerClassName='Container'
          labelClassName='Label'
          inputClassName='Input'
          label='Number input:'
          placeholder='Input your number'
          value={value.number}
          type={inputType.number}
          roundedBorder={true}
          onChange={({ target: { value } }) => setValue(prev => ({
            ...prev,
            number: value
          }))}
          autoFocus={false}
          darkMode={false}
        />
        <Input
          containerClassName='Container'
          labelClassName='Label'
          inputClassName='Input'
          label='Email input:'
          placeholder='Input your email'
          value={value.email}
          type={inputType.email}
          roundedBorder={true}
          onChange={({ target: { value } }) => setValue(prev => ({
            ...prev,
            email: value
          }))}
          autoFocus={false}
          darkMode={false}
        />
      </div>
      <div className='Row' >
        <Input
          containerClassName='Container'
          labelClassName='Label'
          inputClassName='Input'
          label='Date input:'
          placeholder='Input your number'
          value={value.date}
          type={inputType.date}
          roundedBorder={true}
          onChange={({ target: { value } }) => setValue(prev => ({
            ...prev,
            date: value
          }))}
          autoFocus={false}
          darkMode={false}
        />
        <Input
          containerClassName='Container'
          labelClassName='Label'
          inputClassName='Input'
          label='Time input:'
          placeholder='Input your time'
          value={value.time}
          type={inputType.time}
          roundedBorder={true}
          onChange={({ target: { value } }) => setValue(prev => ({
            ...prev,
            time: value
          }))}
          autoFocus={false}
          darkMode={false}
        />
      </div>
    </div>
  );
};

export default App;
