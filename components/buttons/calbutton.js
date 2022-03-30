const ics = require('ics');

function CalButton(props) {
    var year = props.date.getFullYear();
    var month = props.date.getMonth();
    var date = props.date.getDate();
    var hour = props.date.getHours();
    var min = props.date.getMinutes();
    const event = {
        start: [year, month+1, date, hour, min],
        duration: { hours: 2, minutes: 30 },
        title: props.eventname,
        description: 'To be filled in later',
        location: "Eventually will pull location in",
        //url: 'http://www.bolderboulder.com/',
        //geo: { lat: 40.0095, lon: 105.2669 },
        //categories: ['10k races', 'Memorial Day Weekend', 'Boulder CO'],
        status: 'CONFIRMED',
        busyStatus: 'BUSY',
        organizer: { name: props.host, email: 'Race@BolderBOULDER.com' },
        attendees: [
          { name: 'Adam Gibbons', email: 'adam@example.com', rsvp: true, partstat: 'ACCEPTED', role: 'REQ-PARTICIPANT' },
          { name: 'Brittany Seaton', email: 'brittany@example2.org', dir: 'https://linkedin.com/in/brittanyseaton', role: 'OPT-PARTICIPANT' }
        ]
      }
      var blob;  
      // temp creation of ics
       ics.createEvent(event, (error, value) => {
          if (error) {
            console.log(error)
            return
          }
          console.log(value);
          blob = new Blob([value], { type: 'text/calendar;charset=utf-8' });
      })



    const handleClick = async event => {
        event.preventDefault();
        console.log("We are in the button function");
        window.location.href = URL.createObjectURL(blob);

        // const res = await fetch('/api/twilio', {
        //     body: JSON.stringify({
        //         eventid: props.eventid,
        //         maxpeople: props.maxpeople,
        //         name: props.host,
        //         eventname: props.eventname,
        //         date: props.date,
        //         alreadygoing: props.alreadygoing

        //     }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     method: 'POST'
        // });

        // const result = await res.json();
        // console.log(result);
        //<a href={URL.createObjectURL(blob)}> Download</a>
    }

    return (
        <div>
        <button onClick={handleClick}>Download Cal</button>
        </div>
    )





}

export default CalButton;