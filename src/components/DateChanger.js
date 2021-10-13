import {useState} from 'react';
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
// https://reactdatepicker.com/

const DateChanger = ({date, setDate}) => {

  function previousDate() {
    setDate(new Date(date - 86400000));
    console.log(date);
  }
  // date keeps jumping to the unix epoch
  function nextDate() {
    console.log(date);
    setDate(new Date(date.getDate() + 86400000));
    console.log(date);
  }

  return (
    <div className="h-12 flex justify-center items-center">
      <div className="">
        <button onClick={previousDate}>
          <BsFillArrowLeftSquareFill />
        </button>
      </div>
      <div className="">
        <DatePicker selected={date} onChange={newDate => setDate(newDate)} showWeekNumbers monthsShown={2} dateFormat="yyyy-MM-dd" />
      </div>
      <div className="">
        <button onClick={nextDate} >
          <BsFillArrowRightSquareFill />
        </button>
      </div>
    </div>
  )
}

export default DateChanger