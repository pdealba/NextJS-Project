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
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQSHvLcENpud6w789of2qwPmGK5dHtRuDt-YmlcdNd3KCdnhUFmYK8_wQ1iIkkHU02v",
        title: "A First Meetup",
        adress: "Some Street 5, some city",
        description: "Meetup description",
      },
    },
  };
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
  };
}

export default MeetUpDetails;
