import { useData } from "../context/DataContext";

export default function Header(){
  const {filterDispatch} = useData()
  return <div>
    <p className="text-rose-500 text-left">MeetUp</p>
   <input type="text" name="search" id="" onChange = {(e)=>{e.preventDefault();filterDispatch({type:"SEARCH", payload:e.target.value})}}/>
  </div>
}