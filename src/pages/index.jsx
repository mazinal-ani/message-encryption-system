import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./home";
import About from "./encrypt";
import Contact from "./ascii";
import SignUp from "./signin";
import SignIn from "./contact";

function Index() {

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default Index;

