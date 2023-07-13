import { useData } from "../context/DataContext";

export default function Header() {
  const { filterDispatch } = useData();
  return (
    <div className="flex justify-between p-3">
      <p className="text-rose-500 text-left">MeetUp</p>
      <input
        type="text"
        name="search"
        id=""
        placeholder="search event"
        onChange={(e) => {
          e.preventDefault();
          filterDispatch({ type: "SEARCH", payload: e.target.value });
        }}
        className="border-2 border-rose-400 w-1/4 p-1"
      />
    </div>
    
  );
}
