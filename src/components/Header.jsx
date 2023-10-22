import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.webp";
import Avatar from "../img/avatar.jpg";
import { BsFillBasketFill } from "react-icons/bs";
import { MdAdd, MdLogout, MdLogin } from "react-icons/md";
import { motion } from "framer-motion";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

function Header() {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    }
  };

  const menu = () => {
    setIsMenu(!isMenu);
  }
  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  return (
    <header className="flex z-50 w-screen p-3 px-3 md:p-6 md:px-8 top-0 fixed bg-gray-100 shadow-sm">
      {/* DEsktop and tablet */}
      <div className="hidden md:flex w-full h-full gap-8 items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2 cursor-pointer">
          <img src={Logo} className="w-8 object-cover " alt="logo" />
          <p className="text-headingColor lg:text-xl md:text-sm sm:text-xs font-bold">
            Josephine Caribbean BBQ
          </p>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-6"
          >
            <motion.li
              whileTap={{ scale: 0.6 }}
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
            >
              Home
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.6 }}
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
            >
              Menu
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.6 }}
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
            >
              About us
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.6 }}
              className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
            >
              Service
            </motion.li>
          </motion.ul>

          <motion.div
            whileTap={{ scale: 0.6 }}
            className="relative flex items-center justify-center "
          >
            <BsFillBasketFill className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg text-center justify-center">
              <p className="text-xs text-white font-semibold cursor-pointer">
                2
              </p>
            </div>
          </motion.div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className="w-10 min-w[40px] min-h[40px] h-10 drop-shadow-2xl cursor-pointer rounded-full"
              onClick={menu}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-100 shadow-xl rounded-lg flex flex-col gap-2 absolute p-0 top-12 right-0"
              >
                {user && user.email === "cmwema.tech@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="flex gap-4 items-center cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor py-2 px-4 w-full rounded">
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                {user ? (
                  <p
                    onClick={logout}
                    className="flex gap-4 items-center cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor py-2 px-4 w-full rounded"
                  >
                    Log Out <MdLogout />
                  </p>
                ) : (
                  <p
                    onClick={login}
                    className="flex gap-4 items-center cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor py-2 px-4 w-full rounded"
                  >
                    Log In <MdLogin />
                  </p>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex md:hidden w-full h-full justify-between">
        <Link to={"/"} className="flex items-center gap-2 cursor-pointer">
          <img src={Logo} className="w-8 object-cover " alt="logo" />
          <p className="text-headingColor lg:text-xl md:text-sm sm:text-xs font-bold">
            Josephine Caribbean BBQ
          </p>
        </Link>

        <div className="flex items-center gap-4">
          <motion.div
            whileTap={{ scale: 0.6 }}
            className="relative flex items-center justify-center "
          >
            <BsFillBasketFill className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg text-center justify-center">
              <p className="text-xs text-white font-semibold cursor-pointer">
                2
              </p>
            </div>
          </motion.div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className="w-8 min-w[40px] min-h[40px] h-8 drop-shadow-2xl cursor-pointer rounded-full"
              onClick={menu}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6, x: 400 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.6, x: 400 }}
                className="w-40 bg-gray-100 shadow-xl rounded-lg flex flex-col gap-2 absolute p-0 py-4 top-12 right-0 "
              >
                <ul className="flex flex-col items-center gap-6">
                  <motion.li
                    whileTap={{ scale: 0.6 }}
                    className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
                  >
                    Home
                  </motion.li>
                  <motion.li
                    whileTap={{ scale: 0.6 }}
                    className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
                  >
                    Menu
                  </motion.li>
                  <motion.li
                    whileTap={{ scale: 0.6 }}
                    className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
                  >
                    About us
                  </motion.li>
                  <motion.li
                    whileTap={{ scale: 0.6 }}
                    className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer"
                  >
                    Service
                  </motion.li>
                </ul>
                {user && user.email === "cmwema.tech@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="flex gap-2 items-center cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor py-2 px-4 w-full rounded">
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}

                {user ? (
                  <p
                    onClick={logout}
                    className="flex gap-4 items-center cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor py-2 px-4 w-full rounded"
                  >
                    Log Out <MdLogout />
                  </p>
                ) : (
                  <p
                    onClick={login}
                    className="flex gap-4 items-center cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor py-2 px-4 w-full rounded"
                  >
                    Log In <MdLogin />
                  </p>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
