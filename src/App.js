// import React, { useEffect, useState } from 'react'
// import FullCalendar from '@fullcalendar/react' // must go before plugins
// import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
// import { axios } from 'react-axios';
// import "./calendar_list.json"

// function DateEvents(){
//   const [events, setEvents] = useState([]);
//   useEffect(() => {
//     axios.get('./calendar_list.json')
//       .then(response => {
//         setEvents(response.data.calendarList)
//       })
//       .catch(error=>{console.log(error)})
//   }, []);
//   return events;
// }

// const UseData = () =>{
//   const [events, setEvents] = useState([]);
//   useEffect(() => {
//     axios.get('./calendar_list.json')
//       .then(res => setEvents(res.data.calendarList))
//       .catch(err => console.log(err));
//   }, []);
//   return events
// }


//   export default class DemoApp extends React.Component {


//   render() {
//     return (
//       <FullCalendar
//         plugins={[dayGridPlugin]}
//         initialView="dayGridMonth"
//         events={UseData}
//         eventColor='#efb33f'
//       />
//     )
//   }
// }
import React, { Component } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import MyCalendar from './MyCalendar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <MyCalendar/>
      </div>
    );
  }

}

export default App;