import { useState } from "react";
import Typed from "react-typed";
import "./stylesheet.css";
import "./App.css";

function Home() {

    const [count, setCount] = useState(0);

    
    return (
      <div>
        <div className="container">
          <h1 className="title">Message Encryption System v1.0</h1>
          <img
            src="src/assets/terminal.png"
            alt="Terminal Icon"
            className="title_icon"
          />
        </div>
        <div className="animated_text">
          <Typed
            strings={[
              "Encrypt and decipher your messages using the RSA public-key encryption scheme.",
              "Create public and private keys with your own numbers.",
              "Save and store your encrypted messages for later use.",
              "Solve RSA-works related problems.",
              "Convert encrypted messages into plaintext messages.",
            ]}
            typeSpeed={25}
            backSpeed={10}
            loop
          />
        </div>
        {/*<div className="card">
          <form onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </form>
        </div>*/}
      </div>
    );
  }
  
  export default Home