const uri = process.env.MONGODB_URI;
const accountSid = process.env.REACT_APP_TWILIO_ACCOUNT_SID; 
const messageSid = process.env.REACT_APP_TWILIO_MESSAGE_SID; 
const authToken = process.env.REACT_APP_TWILIO_AUTH_TOKEN;
const baseURL = process.env.BASE_URL; 

import { MongoClient } from 'mongodb';
const twilioClient = require('twilio')(accountSid, authToken); 

export default async (req, res) => {
  // first find the group for the given user host
  let client = new MongoClient(uri, {})
  client = await client.connect()
    const db = client.db("sample_mflix");

    const collection = db.collection('groups');
    // search for name and then insert into array if found
    const host = req.body.name;
    const query = {"name": host};
    const alreadygoing = req.body.alreadygoing; // will avoid double texting
    const eventid = req.body.eventid;
    const results = await collection.findOne(query);
    console.log(results.friends);

    let friends = results.friends;

    for (const friend of friends){
      console.log(friend.number);
      console.log(friend.friendname);
      // need if statement there
      //console.log(alreadygoing.some(element => element.friendname === friend.friendname.toLowerCase()));
      let link = `${baseURL}/event/${eventid}?guest=${friend.friendname}&owner=${req.body.name}`;

      let _message = `Tonight, we welcome you, ${friend.friendname} to ${req.body.eventname} at ${req.body.date} hosted by ${req.body.name}. Soon you can click ${link} to RSVP. GodFye wins`;
      
      twilioClient.messages 
      .create({
        messagingServiceSid: messageSid,         
         to: friend.number, 
         body: _message
       }) 
      .then(message => console.log(message.sid)) 
      .done();
    }

    res.json("Added");
    console.log(req.body);
    await client.close();
    //res.status(200).json({ user: 'Ada Lovelace' })
  }

  