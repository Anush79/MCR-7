import { Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";

import "./App.css";

import Toaster from "./component/Toaster";
import Landing from "./pages/Landing";
import Footer from "./component/Footer";
import Header from "./component/Header";
function App() {
  return (
    <div className="App flex flex-col justify-between min-h-screen">
      <main className="w-full h-full  ">
     <Header></Header>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <Toaster />
      </main>
      <Footer />
    </div>
  );
}

export default App;
