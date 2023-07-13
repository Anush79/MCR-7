import { useData } from "../context/DataContext"
import EventCard from '../component/EventCard'


export default function Landing(){
const {eventDataState, searchedValue,filteredData, filterDispatch} = useData()



  return <div className="w-full flex flex-col ">
   <div className="flex justify-between ">
     <h1
          onClick={() => {
          
          }}
          className="text-4xl font-bold text-left"
        >
        Meetup Events
        </h1>
        <select className="border-2 border-rose-400"name="" id="" onChange={(e)=>{filterDispatch({type:e.target.value, payload:e.target.value})}}>
        <option value="select"> Filter Events</option>
          
           <option value="OFFLINE"> Offline</option>
           <option value="ONLINE"> Online</option>
           <option value="RESET"> Reset</option>

        </select>
   </div>
  
   <div className="flex flex-wrap gap-3 w-screen p-4 justify-center items-center">

    {searchedValue.length>0 &&
      filteredData.map(item=>
      <EventCard item={item}/>)
    }
      {searchedValue.length===0 &&
        <div>No Events Found</div>
    }
   </div>
  </div>
}