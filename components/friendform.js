//import classes from './logistics-item.module.css';

function FriendForm(props) {
    const registerUser = async event => {
        event.preventDefault();

        const res = await fetch('/api/group', {
            body: JSON.stringify({
                name: props.name,
                friend: {
                    friendname: event.target.friend.value,
                    number: event.target.number.value,
                }
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        });

        const result = await res.json();
        console.log(result);
    }

    return (
        <form onSubmit={registerUser}>
          <label htmlFor="friend">Friend</label>
          <input id="friend" type="text" autoComplete="name" required />

          <label htmlFor="number">Phone Number (Include +1, no spaces or dashes)</label>
          <input id="number" type="tel" autoComplete="off" required />

          <button type="submit">Add Friend</button>
        </form>
    )





}

export default FriendForm;