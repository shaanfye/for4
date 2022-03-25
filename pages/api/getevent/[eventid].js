const uri = process.env.MONGODB_URI;
import { MongoClient, ObjectId } from 'mongodb';

export default async (req, res) => {
  let client = new MongoClient(uri, {})
  client = await client.connect()
  const db = client.db("sample_mflix");
    const collection = db.collection('events');

    const eventid = req.query.eventid;
    console.log(eventid);
    const query = ObjectId(eventid);
    const results = await collection.findOne(query);
    console.log(results);
    res.status(200).json(results);
    //console.log(req.body);
    await client.close();
    //res.status(200).json({ user: 'Ada Lovelace' })
}
