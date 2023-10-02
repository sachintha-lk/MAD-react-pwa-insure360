import { ChangeEvent, useContext, useState } from "react";
import Heading1 from "../components/Heading1";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link, Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { AuthContext } from "../context/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

function SignUp() {
  const { user, setUser } = useContext(AuthContext)!;

  if (user) {
    return <Navigate to="/vehicles" replace />;
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        <Navigate to={"/vehicles"} replace />;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", errorCode, errorMessage);
        setErrorMessage(errorMessage);

        toast.error(errorMessage);
      });
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className="flex h-4/5  flex-col items-center justify-center">
      <Heading1 className="text-center">Sign Up</Heading1>
      {errorMessage && <span className="text-red-500">{errorMessage}</span>}
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

      <InputField
        label="Confirm Password"
        placeholder="Confirm Password"
        name="confirm-password"
        onChange={handleConfirmPasswordChange}
        type="password"
        value={confirmPassword}
        width="w-10/12 md:w-1/2 lg:w-1/4"
        required={true}
        showRequiredStar={false}
      />
      <span className="my-1"></span>

      <Button
        children="Sign Up"
        variant="primary"
        className="w-10/12 md:w-1/2 lg:w-1/4"
        onClick={handleSignUp}
      />
      <span className="mt-2 text-sm text-slate-800">
        Already have an account?
      </span>
      <Link to="/login" className="w-10/12 md:w-1/2 lg:w-1/4">
        <Button children="Login" variant="secondary" className=" w-full" />
      </Link>
      <ToastContainer />
    </div>
  );
}

export default SignUp;
