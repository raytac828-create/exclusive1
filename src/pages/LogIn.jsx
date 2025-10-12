import "./LogIn.css";
import i1 from "../assets/i1.jpg";
import { useState } from "react";
function LogIn() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="formSignUp2">
      <div>
        <img src={i1} className="i1"></img>
      </div>
      <div className="signUp2">
        <h1>Create an account</h1>
        <p>Enter your details below</p>
        <form>
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
          <input type="submit" value="Log In" />
        </form>
        <p>Forget Password?</p>
      </div>
    </div>
  );
}
export default LogIn;
