import { useState } from "react";
import Heading1 from "../components/Heading1";
import InputField from "../components/InputField";
import Button from "../components/Button";
import SignInWithGoogleButton from "../components/SignInWithGoogleButton";
import { Link } from "react-router-dom";

import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user", user);
        alert("Logged In!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", errorCode, errorMessage);
        alert(errorMessage);
      });
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex h-4/5  flex-col items-center justify-center">
      <Heading1 className="text-center">Login</Heading1>
      <InputField
        label="Email"
        placeholder="Email"
        name="email"
        onChange={handleEmailChange}
        type="email"
        value={email}
        width="w-10/12 md:w-1/2 lg:w-1/4"
        required={true}
        showRequiredStar={false}
      />

      <InputField
        label="Password"
        placeholder="Password"
        name="password"
        onChange={handlePasswordChange}
        type="password"
        value={password}
        width="w-10/12 md:w-1/2 lg:w-1/4"
        required={true}
        showRequiredStar={false}
      />
      <span className="my-1"></span>

      <Button
        children="Login"
        variant="primary"
        className="mt-3 w-10/12 md:w-1/2 lg:w-1/4"
        onClick={handleLogin}
      />

      <span className="mt-2 text-sm text-slate-800">
        Don't have an account?
      </span>
      <Link to="/signup" className="m-0 w-10/12 p-0 md:w-1/2 lg:w-1/4">
        <Button children="Sign Up" variant="secondary" className=" w-full" />
      </Link>

      <span className="my-2">
        <SignInWithGoogleButton />
      </span>

      <button
        onClick={() => {
          console.log(auth.currentUser?.email);
        }}
      >
        dfsdf
      </button>
    </div>
  );
}

export default Login;
