import { useState } from 'react'
import './App.css'
import DigitalClock from '../Components/DigitalClock'
import DateTimeChatbot from '../Components/DateTimeChatbot';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DigitalClock />
      <DateTimeChatbot />
    </>
  );
}

export default App
