import { useRouter } from "next/router";
import EventLoader from '../components/eventloader';


export default function Events(props) {
    const { query } = useRouter();
    const getpara = query.name;
    return <EventLoader name={getpara} />

  
}