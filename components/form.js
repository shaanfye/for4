//import classes from './logistics-item.module.css';

function FormItem(props) {
    const registerUser = async event => {
        event.preventDefault();

        const res = await fetch('/api/register', {
            body: JSON.stringify({
                name: event.target.name.value,
                people: event.target.people.value,
                event: event.target.event.value,
                date: event.target.date.value,
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
          <label htmlFor="name">Name</label>
          <input id="name" type="text" autoComplete="name" required />

          <label htmlFor="people">Number of People</label>
          <input id="people" type="number" autoComplete="off" required />


          <label htmlFor="event">Event</label>
          <input id="event" type="text" autoComplete="off" required />

          <label htmlFor="date">Date</label>
          <input id="date" type="datetime-local" autoComplete="on" required />

          <button type="submit">Register</button>
        </form>
    )





}

export default FormItem;