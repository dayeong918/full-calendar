import React, { useEffect, useState } from 'react';
import FullCalendar, { CalendarApi } from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import './MyCalendar.css';

function MyCalendar(){
    const [date, setDate] = useState(new Date());
    return(
        <div className="App">
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                initialDate={"2022-03-01"}
                showNonCurrentDates={false}
                fixedWeekCount={false}
                titleFormat={{ year: 'numeric', month: 'long' }}
                headerToolbar={{
                    start:'',
                    center: '',//today prev,next
                    end:'title'
                }}
                header={{
                    left:'title'
                }}
                events={[
                    {
                        "title": "삼일절",
                        "date": "2022-03-01",
                        "id": 1
                    },
                    {
                        "title": "음력 2.1",
                        "date": "2022-03-03",
                        "id": 2
                    },
                    {
                        "title": "경칩",
                        "date": "2022-03-05",
                        "id": 3
                    },
                    {
                        "title": "20대 대통령 선거",
                        "date": "2022-03-09",
                        "id": 4
                    },
                    {
                        "title": "음력 2.15",
                        "date": "2022-03-17",
                        "id": 5
                    },
                    {
                        "title": "춘분",
                        "date": "2022-03-21",
                        "id": 6
                    },
                    {
                        "title": "세계 물의 날",
                        "date": "2022-03-22",
                        "id": 7
                    }
                ]}
                eventColor='#efb33f'
            />
        </div>
    );
}
export default MyCalendar;