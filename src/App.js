import { Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";

import "./App.css";

import Toaster from "./component/Toaster";
import Landing from "./pages/Landing";
import Footer from './component/Footer'

function App() {
  return (
    <div className="App">
      <h1
        onClick={() => {
          toast.success("yello");
        }}
        className="text-3xl font-bold underline"
      >
        Hello world!
      </h1>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Toaster />
      <Footer/>
    </div>
  );
}

export default App;
