import { Fragment } from 'react';
import useSWR from 'swr';
import TwilioButton from './twilio/twiliobutton';
const fetcher = (...args) => fetch(...args).then((res) => res.json())


export default function OneEvent(props) {

    var event = props.event.event;
    var date = props.formatdate;
    var people = props.event.people;
    var a = props.event.confirmed;
    
    return <div> 
        {
            <p>{event} is on {date} and of the {people} spots, here is who responded:</p>
        }
            {a?.map((e, index) => <p index={index}>{e.friendname} is a {e.decision}</p>)}
    </div>  
}