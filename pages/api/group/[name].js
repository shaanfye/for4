const uri = process.env.MONGODB_URI;
import { MongoClient } from 'mongodb';

export default async (req, res) => {
  let client = new MongoClient(uri, {})
  client = await client.connect()
  const db = client.db("sample_mflix");
    const collection = db.collection('groups');

    const pid = req.query.name;
    console.log(pid);
    const query = { "name": pid };
    const results = await collection.find({'name':pid}).toArray();
    console.log(results);
    //console.log(results[0].friends);
    if(typeof (results[0]) !== 'undefined'){
    res.json(results[0].friends);
    } else{
      res.json({});
    }
    //console.log(req.body);
    await client.close();
    //res.status(200).json({ user: 'Ada Lovelace' })
  }