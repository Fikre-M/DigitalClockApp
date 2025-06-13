// import { useState } from 'react'
import './App.css'
import DigitalClock from '../Components/DigitalClock'
import DateTimeChatbot from '../Components/DateTimeChatbot';
// import Logo from '../Components/Logo';
import ClockAI from '../Components/ClockAI';

function App() {

  return (
    <>
      <DigitalClock />
      <DateTimeChatbot />
      <ClockAI />
      {/* <Logo /> */}
    </>
  );
}

export default App
