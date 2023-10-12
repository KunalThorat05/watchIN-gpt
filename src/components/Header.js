import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

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

  return (
    <div className="flex absolute justify-between items-center absolutew w-full z-40 px-8 p-2 bg-gradient-to-b from-black">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="object-contain w-44"
      />
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
