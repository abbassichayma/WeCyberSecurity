import React, { useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDispatch } from 'react-redux';
import { addDate } from './Redux/Action';


const  ReactCalander=()=> {
  const [date, setDate] = useState(new Date());
  const dispatch=useDispatch()
    const submit=(date,)=>{
      setDate(date);
  };
   
  const submitDate =()=>{
 dispatch(addDate(date))
  }
  
  return (
    <div className='cal'>
    <Calendar onChange={submit} value={date} onClickDay={()=>submitDate()}  />
    {console.log(date)}
    </div>
  );
  }

export default ReactCalander






