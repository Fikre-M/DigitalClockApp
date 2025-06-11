import { useState } from 'react'
import './App.css'
import DigitalClock from '../Components/DigitalClock'
import DateTimeChatbot from '../Components/DateTimeChatbot';
import Logo from '../Components/Logo';

function App() {

  return (
    <>
      <DigitalClock />
      <DateTimeChatbot />
      <br />
      <br />
    
      <Logo />
    </>
  );
}

export default App
