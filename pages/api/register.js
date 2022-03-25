const uri = process.env.MONGODB_URI;
import { MongoClient } from 'mongodb';

export default async (req, res) => {
    let client = new MongoClient(uri, {})
    client = await client.connect()
    const db = client.db("sample_mflix");

    const collection = db.collection('events');

    //const query = { name: req.body.name };
    const update = {
        name: req.body.name, 
        people: req.body.people, 
        event: req.body.event, 
        date: req.body.date};
    
    //const options = { upsert: true };
    const result = await collection.insertOne(update);
    console.log(
        `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
      );

    
    res.json(result);
    console.log(req.body);
    await client.close();
    //res.status(200).json({ user: 'Ada Lovelace' })
  }