import NewMeetupForm from "../../components/meetups/NewMeetupForm"

function NewMeetup() {
    function addMeetupHandler(formData) {
        console.log(formData)
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler}/>
}

export default NewMeetup;