import { MongoClient, ObjectId } from "mongodb";
import MeetUpDetail from "../../components/meetups/MeetUpDetail";

function MeetUpDetails(props) {
  return (
    <MeetUpDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      adress={props.meetupData.adress}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://pedroDeAlba123:U6BNG35ODtxA71jz://pedroDeAlba123:U6BNG35ODtxA71jz@cluster0.zfzxf.mongodb.net/?retryWrites=true&w=majority@cluster0.zfzxf.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = cliend.db();

  const meetupsCollection = db.collection("meetups");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString,
        title: selectedMeetup.title,
        adress: selectedMeetup.adress,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://pedroDeAlba123:U6BNG35ODtxA71jz://pedroDeAlba123:U6BNG35ODtxA71jz@cluster0.zfzxf.mongodb.net/?retryWrites=true&w=majority@cluster0.zfzxf.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = cliend.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetups) => ({
      params: { meetupId: meetups._id.toString() },
    })),
  };
}

export default MeetUpDetails;
