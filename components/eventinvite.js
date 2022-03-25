import useSWR from 'swr';
import YesButton from './buttons/yesbutton';
const fetcher = (...args) => fetch(...args).then((res) => res.json())
export default function EventInvite(props) {
    // first call the event that you are passed in, then you get the event to display, then you send the confirmation - redirects user w link, and updatesDB
    const eventid = props.eventid;
    const ownername = props.ownername;
    const { data: data, error: error } = useSWR(`/api/getevent/${eventid}`, fetcher);
    // gets the group of the owner as a check
    const { data: groupdata, error: grouperror } = useSWR(`/api/group/${ownername}`, fetcher);
    if (error || grouperror) return <div>failed to load</div>
    if (!data || !groupdata) return <div>loading...</div>

    console.log(props.guestname);

    // if the user is IN confirmed, render " you are confirmed"
    const friendlist = data.confirmed;
    let obj = friendlist.find(o=> o.friendname === props.guestname);
    // check if person in the group
    const ownergroup = groupdata;
    console.log(ownergroup);
    //let friend = ownergroup.find(o=> console.log(o.friendname));
    let friend = ownergroup.find(o=> o.friendname.toLowerCase() === props.guestname.toLowerCase());
    console.log(friend);
    console.log(obj);

    

    if((obj != null) && (obj.hasOwnProperty('friendname'))){
        return(<h1>You already entered for event</h1>)
    } else if(friend != null){ // group data  is array becuase in future will be multiple groups
        return (<section>
        <div>{data.event}</div>
        <div>With {data.name}</div>
        <div>At {data.date}</div>
        <div>And there are a total of {data.people} spots</div>
        <div><YesButton eventid = {props.eventid} guestname={props.guestname} decision={"yes"}>Let's Go Active</YesButton></div>
        <div><YesButton eventid = {props.eventid} guestname={props.guestname} decision={"no"}>I can't go</YesButton></div>
    </section>)
    } else {
        return(<h1>NOT FOUND</h1>)
    }



}