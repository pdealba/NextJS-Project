import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    image:
      "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQSHvLcENpud6w789of2qwPmGK5dHtRuDt-YmlcdNd3KCdnhUFmYK8_wQ1iIkkHU02v",
    title: "Ciudad Magica de Buenos Aires",
    adress: "Some adress",
  },
  {
    id: "m2",
    image:
      "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQSHvLcENpud6w789of2qwPmGK5dHtRuDt-YmlcdNd3KCdnhUFmYK8_wQ1iIkkHU02v",
    title: "Ciudad Magica de Buenos Aires",
    adress: "Some adress 2",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
