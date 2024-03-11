import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const name = useRef();
  const email = useRef();
  const password = useRef();

  const handleSignUp = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    console.log(email, password);
    // Validate the Form
    const valid = checkValidData(email.current.value, password.current.value);
    setErrorMessage(valid);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="background-img"
          className="w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        />
      </div>
      <form className="absolute w-3/12   p-12 bg-black my-36 mx-auto right-0 left-0 text-white  bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <p className="text-red-700 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={handleSignUp} className="cursor-pointer">
          {isSignIn
            ? "Are you new to Netflix ? Sign Up Now"
            : "Already a User ? Sign In Now!!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
