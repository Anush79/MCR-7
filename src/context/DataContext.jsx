import { createContext, useContext, useState, useReducer } from "react";
import {eventData} from '../data/data'
const DataContext = createContext();


const initialValue = {
  filter:"",
  search:""
}
const reducerFunction = (state, action )=>{
 const {type, payload} = action;
 switch (type) {
  case "ONLINE":
    return {...state, filter:payload}
   
    case "OFFLINE":
      return {...state, filter:payload}
    case "RESET":
      return {...state, filter:"reset"}
    case "SEARCH":
      
      return {...state, search:payload}
  default:
    break;
 }
}

export function DataProvider({children}){
const [eventDataState, setEventDataState] = useState(eventData)
const [allFilters, filterDispatch] = useState(reducerFunction, initialValue)


  return <DataContext.Provider value={{eventDataState, eventData,  filterDispatch}}>
    {children}
  </DataContext.Provider>
}
export const useData=()=>useContext(DataContext)