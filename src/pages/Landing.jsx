import { useData } from "../context/DataContext"
import EventCard from '../component/EventCard'


export default function Landing(){
const {eventDataState} = useData()



  return <div>
   <h1
          onClick={() => {
          
          }}
          className="text-4xl font-bold text-left"
        >
        Meetup Events
        </h1>
   <div className="flex flex-wrap gap-3 w-screen p-4 justify-center items-center">

    {
      eventDataState?.meetups.map(item=><EventCard item={item}/>)
    }
   </div>
  </div>
}