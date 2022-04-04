const uri = process.env.MONGODB_URI;
import { MongoClient } from 'mongodb';

export default async (req, res) => {
  let client = new MongoClient(uri, {})
  client = await client.connect()
    const db = client.db("sample_mflix");

    const collection = db.collection('groups');
    // search for name and then insert into array if found
    const query = {"name": req.body.name};
    const result = await collection.updateOne(query, { $pull: { 'friends': { friendname: req.body.removalfriend, number: req.body.removalnumber} } });
    res.json("Removed");
    console.log(req.body);
    await client.close();
  }