import { useState } from "react";
import Heading1 from "../components/Heading1";
import InputField from "../components/InputField";
import Button from "../components/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Clicked!");
    alert("Clicked The button");
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

      <Button
        children="Login"
        variant="primary"
        className="w-10/12 md:w-1/2 lg:w-1/4"
        onClick={handleLogin}
      />

      <span className="mt-2 text-sm text-slate-800">
        Don't have an account?
      </span>
      <Button
        children="Sign Up"
        variant="secondary"
        className="w-10/12 md:w-1/2 lg:w-1/4"
        onClick={handleLogin}
      />
    </div>
  );
}

export default Login;
