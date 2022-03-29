const ics = require('ics');




export default async (req, res) => {
    const event = {
        start: [2018, 5, 30, 6, 30],
        duration: { hours: 6, minutes: 30 },
        title: 'Bolder Boulder',
        description: 'Annual 10-kilometer run in Boulder, Colorado',
        location: 'Folsom Field, University of Colorado (finish line)',
        url: 'http://www.bolderboulder.com/',
        geo: { lat: 40.0095, lon: 105.2669 },
        categories: ['10k races', 'Memorial Day Weekend', 'Boulder CO'],
        status: 'CONFIRMED',
        busyStatus: 'BUSY',
        organizer: { name: 'Admin', email: 'Race@BolderBOULDER.com' },
        attendees: [
          { name: 'Adam Gibbons', email: 'adam@example.com', rsvp: true, partstat: 'ACCEPTED', role: 'REQ-PARTICIPANT' },
          { name: 'Brittany Seaton', email: 'brittany@example2.org', dir: 'https://linkedin.com/in/brittanyseaton', role: 'OPT-PARTICIPANT' }
        ]
      }
    res.send(event);
    
    // ics.createEvent(event, (error, value) => {
    //     if (error) {
    //       console.log(error)
    //       return
    //     }
    //     //res.type('ics');
    //     const t = value.toString();
    //     res.send(value);
    //     console.log(value.toString());
    // })
  
    //res.json("Added");
      //console.log("Added friend to this:", req.body);
      //res.status(200).json({ user: 'Ada Lovelace' })
    }