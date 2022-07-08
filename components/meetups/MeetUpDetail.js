import classes from './MeetUpDetail.module.css';

function MeetUpDetail(props) {
  return (
    <Fragment>
        <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <adress>{props.adress}</adress>
      <p>{props.description}</p>
      </section>
    </Fragment>
  );
}
