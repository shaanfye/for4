export default function DeleteFriend(props) {
    
    const deleteUser = async event => {
        event.preventDefault();

        const res = await fetch('/api/group/delete', {
            body: JSON.stringify({
                name: props.name,
                removalfriend: props.removalfriend,
                removalnumber: props.number
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

        const result = await res.json();
        console.log(result);
    }


    return(<button aria-label='delete item' onClick={deleteUser} type='button'>X</button>)

}