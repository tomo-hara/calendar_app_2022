import React from 'react';
import { useState } from 'react';
import DayPicker from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput'
import 'react-day-picker/lib/style.css';
import './App.css';

import logo from './logo.svg';

function OverlayComponent({ children, ...props }) {
  return (
    <div {...props}>
      <p>My custom things</p>
      
      { children }
      <p>Some content below the calendar</p>
    </div>
  );
}

function MyDayPicker() {
  return <DayPicker overlayComponent={OverlayComponent} />;
}

export default function App() {
  
  const [day, setDay] = useState();

  const handleDayClick = (day, { selected }) => {
    if (selected) {
      setDay(undefined);
    }
    else {
      setDay(day);
    }
  }
  
  return (
    <>
    <div className="App">
      <DayPicker 
        onDayClick={handleDayClick} 
        selectedDays={day}
      />
      {day ? <p>{day.toString()}</p> : <p>날짜를 선택해주세요.</p>}
      <p>Please type a day:</p>
      <DayPickerInput onDayChange={day => console.log(day)} />
    </div>
    </>
  );
}
