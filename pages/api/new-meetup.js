import { MongoClient } from "mongodb";

async function Handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://pedroDeAlba123:U6BNG35ODtxA71jz://pedroDeAlba123:U6BNG35ODtxA71jz@cluster0.zfzxf.mongodb.net/?retryWrites=true&w=majority@cluster0.zfzxf.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = cliend.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default Handler;
