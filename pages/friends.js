import useSWR from 'swr';
import { useRouter } from "next/router";
import FriendLoader from '../components/friendloader';


export default function Events(props) {
    const { query } = useRouter();
    const getpara = query.name;
    return <FriendLoader name={getpara} />

  
}