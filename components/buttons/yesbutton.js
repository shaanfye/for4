function YesButton(props) {
    const handleClick = async event => {
        event.preventDefault();
        console.log("We are in the yesbutton function");

        const res = await fetch('/api/getevent', {
            body: JSON.stringify({
                guestname: props.guestname,
                eventid: props.eventid,
                decision: props.decision
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
        <button onClick={handleClick}>{props.children}</button>
        </div>
    )





}

export default YesButton;