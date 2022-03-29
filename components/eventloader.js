import { Fragment } from 'react';
import useSWR from 'swr';
import OneEvent from './oneevent';
import TwilioButton from './twilio/twiliobutton';
const fetcher = (...args) => fetch(...args).then((res) => res.json())
const fetcher2 = (...args) => fetch(...args).then((res) => res.json())
const ics = require('ics');

import { useRouter } from 'next/router';

export default function EventLoader(props) {
    const { data: data, error: error } = useSWR(`/api/user/${props.name}`, fetcher);
    const { data: groupdata, error: grouperror } = useSWR(`/api/getevent/downloadcal`, fetcher2);
    if (error || grouperror) return <div>failed to load</div>
    if (!data || !groupdata) return <div>loading...</div>

    var blob;
    var urlc;

    // temp creation of ics
     ics.createEvent(groupdata, (error, value) => {
        if (error) {
          console.log(error)
          return
        }
        console.log(value);
        blob = new Blob([value], { type: 'text/calendar;charset=utf-8' });
    })
    


  
    // render data
    console.log(groupdata);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:'2-digit', minute:'2-digit', hour12:true };
    var easydate = new Date(data.date).toLocaleDateString([],options);

    return <ul> 
        {
            data.map((event) =>
                <li>
                <OneEvent event={event} formatdate = {new Date(event.date).toLocaleDateString([],options)}/> 
                <TwilioButton 
                date={new Date(event.date).toLocaleDateString([],options)}
                host={props.name} 
                eventname={event.event} 
                eventid={event._id} 
                maxpeople={event.people}
                alreadygoing={event.confirmed}/>
                <a href={URL.createObjectURL(blob)}> Download</a>
            </li>
        )}
    </ul>  
}

// if(event.confirmed != null){
//     event.confirmed.map((innerEvent) => {<li>{innerEvent.friendname} and {innerEvent.decision}</li>})
// }   