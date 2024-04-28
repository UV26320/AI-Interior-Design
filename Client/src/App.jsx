import { Route,  Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Design from "./pages/Design";
import RandomImage from "./pages/RandomImage";

function App() {
  return (
    <div>

      <div>
        <Navbar></Navbar>
      </div>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Design-Interior-Free" element={<Design></Design>}></Route>
        <Route path="/Random-Image-Free" element={<RandomImage></RandomImage>}></Route>
      </Routes>

    </div>
  );
}

export default App;
