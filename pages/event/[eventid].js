// event url will have the unique event id and ur name as a query parameter
// receive event/eventid?guest=name&owner=ownername
import { useRouter } from "next/router";
import { useEffect } from "react";
import EventInvite from '../../components/eventinvite';


export default function EventLandingPage(props) {
    const router = useRouter();
    var pid;
    var guest;
    var owner;
    var eventid;
    if (!router.isReady){return <div>Loading</div>}
    else{
            pid = router.query;
            guest = pid.guest;
            owner = pid.owner;
            eventid = pid.eventid;
            return <EventInvite guestname={guest} ownername={owner} eventid={eventid} />

        }



    
    // will return both the eventid and the guest name
    // LOGIC TO ADD
    // if guest is not in group of owner by searching group owner of eventid, return NO EVENT
    // if guest already is in the confirmed array, return YOU ARE ALREADY GOING OR NOT GOING, and add some details
    // if(pid.owner != null){
    // } else {
    //     return <div> Waiting</div>
    // }

  
}
