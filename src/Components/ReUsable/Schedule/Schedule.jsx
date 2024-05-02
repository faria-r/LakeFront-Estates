import React from "react";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react';
import Button from "../Button/Button";
import ModalButton from "../ModalButton/ModalButton";


const Schedule = () => {
    const [state, setState] = useState({
  selection: {
    startDate: new Date(),
    endDate: null,
    key: 'selection'
  },
  compare: {
    startDate: new Date(),
    endDate: addDays(new Date(), 3),
    key: 'compare'
  }
});
const selectedDate =state.compare.startDate;
console.log(selectedDate)
  return (
    <div className=" sm:max-w-[50vw]  border shadow-xl mx-auto lg:pr-2">
      <h2 className="text-4xl font-semibold font-mono mb-6 text-center"> Schedule a Showing</h2>
      <p className="text-center mb-16 lg:w-[30vw] mx-auto">
        I would love to show you our beautiful property. Please select your
        preferred date and time below. I will be in touch shortly to confirm
        your appointment.
      </p>

      <DateRangePicker className="max-w-[50vw]"
  onChange={item => setState({ ...state, ...item })}
  months={1}
  minDate={addDays(new Date(), -300)}
  maxDate={addDays(new Date(), 900)}
  direction="vertical"
  scroll={{ enabled: true }}
  ranges={[state.selection, state.compare]}
/>

<div className="lg:flex justify-between w-[70vw] lg:w-[40vw] mx-auto mt-2 pt-4 items-center">
        <div className="text-center lg:w-[30vw] mx-auto"> <Button value={"IN PRESENT"}></Button></div>
        <div className="text-center w-[30vw] mx-auto"> <Button value={"Via Video"}></Button></div>
      </div>
      <div className="text-center w-[30vw] mx-auto"><ModalButton value={'NEXT'} date={selectedDate}></ModalButton></div>
    </div>
  )
};

export default Schedule;
