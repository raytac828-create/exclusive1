import "./SignUp.css";
import i1 from "../assets/i1.jpg";
import { useState } from "react";
import {Link} from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <div className="signUp">
      <div>
        <img src={i1} className="i1"></img>
      </div>
      <div className="signUp2">
        <h1>Log in to Exclusive</h1>
        <p>Enter your details below</p>
        <form>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="text"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            placeholder="Email or Phone number"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button className="buttonSignUp">Create Account</button>
        </form>
        
        <p>Already have account?</p>
        <Link to="/login" >
          Login
        </Link>
      </div>
    </div>
  );
}
export default SignUp;