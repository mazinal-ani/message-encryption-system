import { useState } from "react";
import Typed from "react-typed";
import "./stylesheet.css";
import "./App.css";
import RSAusage from "../components/rsausage";
import RSAdescription from "../components/rsadescription";
import RSAmath from "../components/rsamath";

function Home() {

    const [count, setCount] = useState(0);


    return (
      <div>
        <div className="homecontainer">
          <h1 className="title">Message Encryption System v1.0</h1>
          <img
            src="src/assets/encryption.png"
            alt="Terminal Icon"
            className="title_image"
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
        <div className="grey_gradient_square">
            <RSAdescription />
        </div>
        <div className="grey_gradient_square">
            <RSAmath />
        </div>
        <div className="grey_gradient_square">
            <RSAusage />
        </div>
        <hr className='bottom_line'/>
        <h1 className='bottom_copyright'>Made by Mazin Al-Ani, 2023. CS Student at the University of Waterloo.</h1>
        {/*<div className="card">
          <form onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </form>
        </div>*/}
      </div>
    );
  }
  
  export default Home