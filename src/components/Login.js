import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);

  const toggleSignInform = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute bg-black border-black bg-opacity-80 m-48 mx-auto right-0 left-0 px-12 p-6">
        <p className="text-white text-3xl my-8 font-bold">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        <input
          type="text"
          placeholder="Email or phone number"
          className="my-2 w-full p-2 rounded-md"
        />
        {!isSignInForm && (
          <input
            type="text"
            placeholder="UserName"
            className="my-2 w-full p-2 rounded-md"
          />
        )}
        <input
          type="password"
          placeholder="Password"
          className="my-2 p-2 w-full rounded-md"
        />
        <button className="bg-red-600 p-2 text-white my-8 w-full rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-8 text-gray-400 font-semibold">
          {isSignInForm ? "New to Netflix ? " : "already have account ? "}
          <span
            className="text-white cursor-pointer hover:underline"
            onClick={() => toggleSignInform()}
          >
            {isSignInForm ? "Sign Up Now" : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
