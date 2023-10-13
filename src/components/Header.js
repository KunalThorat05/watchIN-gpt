import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/slices/gptSlice";
import { changelanguage } from "../utils/slices/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changelanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubcribe when component unmounted
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex absolute justify-between items-center absolutew w-full z-40 px-8 p-2 bg-gradient-to-b from-black">
      <img src={LOGO} alt="logo" className="object-contain w-44" />
      {user ? (
        <div className="flex justify-between gap-5">
          <select
            className=" p-2 m-2 bg-gray-900 text-white"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 rounded-lg text-white"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "GptSearch" : "HomePage"}
          </button>
          <img
            alt="usericon"
            className="w-10 h-10 rounded-sm object-contain"
            src={user?.photoURL}
          />
          <button className="font-bold cursor-pointer" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
