const uri = process.env.MONGODB_URI;
import { MongoClient, ObjectId } from 'mongodb';

export default async (req, res) => {
  let client = new MongoClient(uri, {})
  client = await client.connect()
    const db = client.db("sample_mflix");

    const collection = db.collection('events');
    // search for name and then insert into array if found
    const query = {"_id":ObjectId(req.body.eventid)};


    const update = {
      $addToSet: {
        "confirmed": {
          "friendname": req.body.guestname,
          "decision": req.body.decision // maybe add in number later but probably not necessary right now bc can search in groups
    }}};
    const options = { upsert: true };
    const result = await collection.updateOne(query, update, options);

    res.json("Added");
    console.log("Added friend to this:", req.body);
    await client.close();
    //res.status(200).json({ user: 'Ada Lovelace' })
  }