import {useState} from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";
import { ArrowBack } from "@mui/icons-material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';

export default function Details(){

  const navigate = useNavigate();
    
  const {eventId} = useParams()
  const {eventsData, setEventDataState} = useData()
  const [formData, setFormData] = useState({
    name:"",
    email:""
  })
  const [isRSVP, setIsRSVP] = useState(false)

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const doRSVP =()=>{

}


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
    price,
 

  } = eventFound
const onchangeHandler =(e)=> {
  setFormData((prevData)=>({...prevData, [e.target.name]:e.target.value}))
}
const onSubmitHandler=()=>{
  const newData= eventsData?.meetups?.map(item=>item.id === eventId ? {...item, reservedBy:formData, isRSVP:true}: item) 
  setEventDataState(newData)
  setIsRSVP(true)
  toast.success("Successfully RSVP")
  handleClose()
}
return <div className="flex w-full">
   <ArrowBack onClick ={()=>{navigate('/')}}/>
   <div className='w-2/3' >
   <h1 className='text-3xl font-bold' >{title}</h1>

    <img src={eventFound?.eventThumbnail} alt=""  className="w-1/2"/>
    <p>{eventDescription}</p>
  </div>
  <div className='w-1/3'>
    <p>
      {
      isPaid && "₹ "+price
    }
    </p>
    <div>
      <div className='bg-rose-400 text-white font-bold'
      >  <Button className='' onClick={handleOpen}>{isRSVP? "Already RSVPed":"RSVP"}</Button>

      </div>
    
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='flex flex-col gap-2'>
             <input placeholder='Enter name' type="text" name="name" value ={formData.name}onChange={onchangeHandler}  className='border-2 p-2'/>
          <input type="email" name="email" id="" placeholder ="Enter Email"onChange={onchangeHandler} className='border-2 p-2' />
          <p>{isPaid && "* you have to make the payment at the venue"}</p>
          <button className='bg-rose-400 p-2 text-white font-bold'  onClick={onSubmitHandler}>RVSP</button>
          </div>
         
        </Box>
      </Modal>
    </div>


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