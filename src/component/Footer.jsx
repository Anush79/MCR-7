import { NavLink } from "react-router-dom";

export default function Footer(){
  return <footer>
    <small>Made with React by <NavLink className={"border border-x-8 border-red-400 px-2 font-semibold"} to="https://github.com/Anush79/MCR-7">Anushka</NavLink></small>
  </footer>
}