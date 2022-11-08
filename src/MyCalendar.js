import React, { useEffect, useState } from 'react';
import FullCalendar, { CalendarApi, CalendarRoot } from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import './MyCalendar.css';
import hoilday from './holiday.json';
import aniversary from './aniversary.json';

function MyCalendar() {
    const [date, setDate] = useState(new Date());

    const ym = (date) => {
        let mvalue = (date.date.month + 1);
        switch (mvalue) {
            case 1: return date.date.year + " " + "Januaray";
            case 2: return date.date.year + " " + "Feburary";
            case 3: return date.date.year + " " + "March";
            case 4: return date.date.year + " " + "April";
            case 5: return date.date.year + " " + "May";
            case 6: return date.date.year + " " + "June";
            case 7: return date.date.year + " " + "July";
            case 8: return date.date.year + " " + "August";
            case 9: return date.date.year + " " + "September";
            case 10: return date.date.year + " " + "October";
            case 11: return date.date.year + " " + "November";
            case 12: return date.date.year + " " + "December";
            default: return date.date.month + 1;
        }
        // return date.date.year+" "+(date.date.month);
    };

    // const monthh = (date)=> {
    //     return date.date.year;
    // };
// const event = FullCalendar.getEventById('a')
    return (
        <div>
            <div>
                {/* <h2>{ym.mvalue}</h2> */}
                <h1>3</h1>
            </div>
            <FullCalendar
                // contentHeight={900}
                // height={"100vh"}
                // handleWindowResize={true}
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                initialDate={"2022-03-01"}
                showNonCurrentDates={false}
                fixedWeekCount={false}
                titleFormat={ym}
                headerToolbar={{ start: '', end: 'title' }}
                // footerToolbar={{
                //     start:'',
                //     center: 'prev next', //today
                //     end:''
                // }}
                // contentHeight="auto"
                aspectRatio={1}
                expandRows={true}
                eventColor={'white'}
                eventSources={[
                    { /* 기념일 : 글자 검은색 */
                        events :[
                            {
                                title: "음력 2.1",
                                date: "2022-03-03",
                                id: 2
                            },
                            {
                                title: "경칩",
                                date: "2022-03-05",
                                id: 3
                            },
                            {
                                title: "음력 2.15",
                                date: "2022-03-17",
                                id: 5
                            },
                            {
                                title: "춘분",
                                date: "2022-03-21",
                                id: 6
                            },
                            {
                                title: "세계 물의 날",
                                date: "2022-03-22",
                                id: 7
                            }
                        ],
                    },
                    {   /* 공휴일 : 글자 빨간색 */
                        events:[
                            {
                                title: "삼일절",
                                date: "2022-03-01",
                                className: 'custom'
                            },
                            {
                                title: "20대 대통령 선거",
                                date: "2022-03-09",
                                id: 4
                            }
                        ],
                        textColor:'red',
                        color:'pink'
                    }
                ]
                }
                    
                


                // events={[
                //     {
                //         "title": "삼일절",
                //         textColor: "red",
                //         "date": "2022-03-01",
                //         "id": 1
                //     },
                //     {
                //         "title": "음력 2.1",
                //         "date": "2022-03-03",
                //         "id": 2
                //     },
                //     {
                //         "title": "경칩",
                //         "date": "2022-03-05",
                //         "id": 3
                //     },
                //     {
                //         "title": "20대 대통령 선거",
                //         "date": "2022-03-09",
                //         "id": 4,
                //         eventTextColor: "#ff0000"
                //     },
                //     {
                //         "title": "음력 2.15",
                //         "date": "2022-03-17",
                //         "id": 5
                //     },
                //     {
                //         "title": "춘분",
                //         "date": "2022-03-21",
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       //         "id": 6
                //     },
                //     {
                //         "title": "세계 물의 날",
                //         "date": "2022-03-22",    
                //         "id": 7
                //     },
                // ]
                //}
            />
        </div>
    );
};
export default MyCalendar;