import { Fragment } from 'react';
import useSWR from 'swr';
import OneEvent from './oneevent';
import TwilioButton from './twilio/twiliobutton';
const fetcher = (...args) => fetch(...args).then((res) => res.json())
import { useRouter } from 'next/router';

export default function EventLoader(props) {
    const { data, error } = useSWR(`/api/user/${props.name}`, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
  
    // render data
    console.log(data);
    // var router = useRouter();
    // console.log(router.pathname);
    //var edit = JSON.stringify(data);
    //console.log(data[0].confirmed);
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
            </li>
        )}
    </ul>  
}

// if(event.confirmed != null){
//     event.confirmed.map((innerEvent) => {<li>{innerEvent.friendname} and {innerEvent.decision}</li>})
// }   