const uri = process.env.MONGODB_URI;
import { MongoClient } from 'mongodb';

export default async (req, res) => {
  let client = new MongoClient(uri, {})
  client = await client.connect()
  const db = client.db("sample_mflix");
    const collection = db.collection('events');

    const pid = req.query.name;
    console.log(pid);
    const query = { "name": pid };
    //const test = await collection.insertOne({yes: 'no'});
    //const update = { $set: { name: req.body.name, people: req.body.people, event: req.body.event, date: req.body.date}};
    //const options = { upsert: true };
    const results = await collection.find({'name':pid}).toArray();
    res.json(results);
    //console.log(req.body);
    await client.close();
    //res.status(200).json({ user: 'Ada Lovelace' })
  }