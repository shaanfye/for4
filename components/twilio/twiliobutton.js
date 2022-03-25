function TwilioButton(props) {
    const handleClick = async event => {
        event.preventDefault();
        console.log("We are in the button function");

        const res = await fetch('/api/twilio', {
            body: JSON.stringify({
                eventid: props.eventid,
                maxpeople: props.maxpeople,
                name: props.host,
                eventname: props.eventname,
                date: props.date,
                alreadygoing: props.alreadygoing

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
        <div>
        <button onClick={handleClick}>Add</button>
        </div>
    )





}

export default TwilioButton;