import { MogoClient, MongoClient } from "mongodb";

import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://pedroDeAlba123:U6BNG35ODtxA71jz://pedroDeAlba123:U6BNG35ODtxA71jz@cluster0.zfzxf.mongodb.net/?retryWrites=true&w=majority@cluster0.zfzxf.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = cliend.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        adress: meetup.adress,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
