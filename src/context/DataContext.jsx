import { createContext, useContext, useState, useReducer } from "react";
import { eventsData } from '../data/data'
const DataContext = createContext();


const initialValue = {
  filter: "",
  search: ""
}
const reducerFunction = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ONLINE":
      return { ...state, filter: type }

    case "OFFLINE":
      return { ...state, filter: type }
    case "RESET":
      return { ...state, filter: "reset" }
    case "SEARCH":

      return { ...state, search: payload }
    default:
      break;
  }
}

export function DataProvider({ children }) {
  const [eventDataState, setEventDataState] = useState(eventsData?.meetups)
  const [allFilters, filterDispatch] = useReducer(reducerFunction, initialValue)


  const searchedValue = allFilters?.search?.length > 0 ?
    eventsData?.meetups.filter(item => item.title.toLowerCase().includes(allFilters?.search?.toLowerCase().trim()) ||
      item?.eventTags?.includes(allFilters?.search?.toLowerCase().trim())
    ) : eventDataState;

    console.log({ searchedValue })
  const filteredData = allFilters?.filter.length > 0 && allFilters?.filter!=="reset"?
    searchedValue?.filter(item => item?.eventType.toLowerCase() === allFilters.filter.toLowerCase()) :
    allFilters?.filter==="reset"?eventsData.meetups:
    searchedValue;

  return <DataContext.Provider value={{ eventDataState, setEventDataState,searchedValue, filteredData, eventsData, filterDispatch }}>
    {children}
  </DataContext.Provider>
}
export const useData = () => useContext(DataContext)