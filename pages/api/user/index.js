

export default async (req, res) => {
 

    // const query = { name: req.body.name };
    // const update = { $set: { name: req.body.name, people: req.body.people, event: req.body.event, date: req.body.date}};
    // const options = { upsert: true };
    // const result = await collection.updateOne(query, update, options);
    // console.log(
    //     `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    //   );
    res.json("Temporary");
    console.log(req.body);
    await client.close();
    //res.status(200).json({ user: 'Ada Lovelace' })
  }