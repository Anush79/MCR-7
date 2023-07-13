import { useParams, useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";
import { ArrowBack } from "@mui/icons-material";


export default function Details(){
  const navigate = useNavigate();
    
  const {eventId} = useParams()
  const {eventsData} = useData()
  const eventFound = eventsData?.meetups?.find(item=>item.id === eventId);

  const {
    id,
      title,
      eventStartTime,
      eventEndTime,
      location,
      address,
      eventThumbnail,
      eventDescription,
      hostedBy,
      eventType,
      isPaid,
      eventTags,
    speakers,
  } = eventFound

return <div>
  <div>
    <ArrowBack onClick ={()=>{navigate('/')}}/>
    <img src={eventFound?.eventThumbnail} alt="" />
  </div>
</div>



}



const sampledata = {
  "id": "meet001",
      "title": "Tech Conference",
      "eventStartTime": "2023-07-13T07:00:00",
      "eventEndTime": "2023-07-13T17:00:00",
      "location": "Tech Hub",
      "address": "123 Main Street, City",
      "eventThumbnail": "https://i.postimg.cc/SKrZhNpS/pexels-photo-1181403.jpg",
      "eventDescription": "Join us for a day of technology insights and networking at the Tech Conference, organized by the Tech Community. This offline event will take place on August 1st from 9:00 AM to 5:00 PM at Tech Hub, located at 123 Main Street, City. The conference will feature renowned speakers including John Smith, CTO, and Jane Doe, Software Engineer. With a focus on technology and networking, this event offers a great opportunity to learn, connect, and stay up-to-date with the latest trends in the industry. The event is paid, and the ticket price is ₹7,500. Please adhere to the business casual dress code, and note that the event is open to individuals aged 18 and above.",
      "hostedBy": "Tech Community",
      "eventType": "Offline",
      "isPaid": true,
      "eventTags": ["technology", "networking"],
      "speakers": [
        {
          "name": "John Smith",
          "image": "https://i.postimg.cc/J7xjYLnc/pexels-photo-5384445.jpg",
          "designation": "CTO"
        },
        {
          "name": "Jane Doe",
          "image": "https://i.postimg.cc/tC5yVBBg/pexels-photo-1130626.jpg",
          "designation": "Software Engineer"
        },]
}