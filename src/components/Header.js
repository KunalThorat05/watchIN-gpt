import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
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
