import { Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";

import "./App.css";

import Toaster from "./component/Toaster";
import Landing from "./pages/Landing";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Details from "./pages/DetailsPage";
function App() {
  return (
    <div className="App flex flex-col justify-between min-h-screen">
     <Header></Header>  
     <main className=" h-full p-2 ">
    
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/:eventId" element={<Details/>}/>
        </Routes>
        <Toaster />
      </main>
      <Footer />
    </div>
  );
}

export default App;
