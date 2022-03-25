import useSWR from 'swr';
import FriendForm from './friendform';
const fetcher = (...args) => fetch(...args).then((res) => res.json())


export default function FriendLoader(props) {
    const { data, error } = useSWR(`/api/group/${props.name}`, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    if (JSON.stringify(data) === '{}'){
        return <section><FriendForm name = {props.name}/></section>

    }
  
    // render data
    console.log(data);

    return( <section> 
    <h1>Group One to be made dynamic later</h1>
    <ul> 
        {data.map((event) => {
            return(<li><p>{event.friendname} and the number is {event.number}</p></li>)
        })}
    </ul>
    <FriendForm name = {props.name}/>
    </section>)

}