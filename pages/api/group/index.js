const uri = process.env.MONGODB_URI;
import { MongoClient } from 'mongodb';

export default async (req, res) => {
  let client = new MongoClient(uri, {})
  client = await client.connect()
    const db = client.db("sample_mflix");

    const collection = db.collection('groups');
    // search for name and then insert into array if found
    const query = {"name": req.body.name};


    const update = {
      $set: {name: req.body.name},
      $push: {
        "friends": {
          "friendname": req.body.friend.friendname,
          "number": req.body.friend.number
    }}};
    const options = { upsert: true };
    const result = await collection.updateOne(query, update, options);

    res.json("Added");
    console.log(req.body);
    await client.close();
    //res.status(200).json({ user: 'Ada Lovelace' })
  }