import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/slices/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const userName = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //Validate the Form data

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userName.current.value,
            photoURL:
              "https://media.licdn.com/dms/image/C4D03AQEnKX4v8cVUXg/profile-displayphoto-shrink_400_400/0/1614689290503?e=1702512000&v=beta&t=aK2AKZ1AuMResh53cU4cVKpOJ9acwwZmaov3BdRiBYA",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                }),
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed ins
          const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }

    //sign In Sign Up Logic here
  };

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute bg-black border-black bg-opacity-80 m-48 mx-auto right-0 left-0 px-12 p-6"
      >
        <p className="text-white text-3xl my-8 font-bold">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>
        {!isSignInForm && (
          <input
            ref={userName}
            type="text"
            placeholder="UserName"
            className="my-2 w-full p-2 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="my-2 w-full p-2 rounded-md"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-2 p-2 w-full rounded-md"
        />
        {errorMessage && (
          <p className="text-red-500 font-bold">{errorMessage}</p>
        )}
        <button
          className="bg-red-600 p-2 text-white my-8 w-full rounded-md"
          onClick={handleButtonClick}
        >
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
