import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./home";
import ContactPage from "./contact";
import ASCIIPage from "./ascii"
import EncryptionPage from "./encrypt";
import SignInPage from "./signin";
import { AuthContextProvider } from "../context/AuthContext";

function Index() {

  return (
    <div>
      <BrowserRouter>

        <AuthContextProvider>

          <Navbar/>
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/encryption" element={<EncryptionPage />} />
            <Route path="/ascii" element={<ASCIIPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
          </Routes>

        </AuthContextProvider>

      </BrowserRouter>
    </div>
  );
}
export default Index;

