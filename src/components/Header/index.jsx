// import React, { useState } from "react";
// import logo from "../../assets/Logo (7).png";
// import { Link, useNavigate } from "react-router-dom";
// import { IoSearch, IoSearchSharp } from "react-icons/io5";
// import { IoCartOutline } from "react-icons/io5";
// import { useDispatch, useSelector } from "react-redux";
// import { IoCloseCircleOutline } from "react-icons/io5";
// import userIcon from "../../assets/userIcon.webp";
// import userfoto from "../../assets/3135715.png";
// import { RiLogoutCircleRLine } from "react-icons/ri";

// import { useAuth } from "../context/AuthContext";
// import { searchProduct } from "../../redux/reducers/addProductSlice";
// import { BsCart3 } from "react-icons/bs";

// const Header = () => {
//   const { register, signInWithGoogle, logOut, logIn } = useAuth();
//   const { basket, user } = useSelector((s) => s.add);
//   const dispatch = useDispatch();
//   const nav = useNavigate();
//   // console.log(user, "user");
//   const [modal, setModal] = useState(false);
//   const [error, setError] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [basketAni, setBasketAni] = useState(false);
//   const [inputAni, setInputAni] = useState(false);
//   const [isOnclick, setIsOnclick] = useState(false);

//   const [inputValue, setInputValue] = useState("");

//   async function handleRegister() {
//     try {
//       await register(email, password);
//       setEmail("");
//       setPassword("");
//       setModal(false);
//     } catch (error) {
//       setError(error.message);
//     }
//   }
//   async function handleLogIn() {
//     try {
//       await logIn(email, password);
//       setEmail("");
//       setPassword("");
//       setModal(false);
//     } catch (error) {
//       setError(error.message);
//     }
//   }
//   function handleGoogle() {
//     signInWithGoogle();
//     nav("/");
//     setModal(false);
//   }

//   return (
//     <div className="header py-[30px] sticky top-0 backdrop-blur-sm z-[100]">
//       <div className="container">
//         <div className="flex items-center  justify-between max-[1024px]:justify-around lg:justify-around">
//           <img
//             src={logo}
//             alt=""
//             className="w-[200px] lg:w-[160px] 867:w-[150px] md:w-[140px] sm:w-0 546:w-0 xs:w-0 "
//           />
//           <div className="text-[25px]  867:text-[22px] md:text-[20px] 546:text-[16px] text-[#274C5B] font-bold flex items-center gap-7 768:gap-3  lg:text-[20px] lg:gap-5">
//             <Link to={"/"} className="">
//               Home
//             </Link>
//             <Link to={"/"}>About</Link>

//             <Link to={user ? "/shop" : "*"}>Shop</Link>
//           </div>
//           <div className="flex items-center gap-3 lg:gap-2">
//             <div className="relative flex items-center  ">
//               {inputAni ? (
//                 <input
//                   onChange={(e) => setInputValue(e.target.value)}
//                   value={inputValue}
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter") {
//                       dispatch(searchProduct(inputValue));
//                       nav(`/search/${inputValue}`);
//                       setInputValue("");
//                       setInputAni(false);
//                     }
//                   }}
//                   type="text"
//                   placeholder="search..."
//                   className={`text-2xl  left-[-280px] top-[45px] text-black bg-gray-200 py-[10px] lg:py-[8px] px-[30px] lg:px-[25px] md:px-[20px] rounded-3xl outline-none  md:absolute`}
//                 />
//               ) : null}
//               <div
//                 className={`bg-[#7EB693]   cursor-pointer ${
//                   inputAni ? "top-[-22px]" : "top-[-23px]"
//                 } max-[1024px]:top-[-25px] right-3 w-[43px] 546:w-[35px] lg:w-[40px] h-[43px] 546:h-[35px] lg:h-[40px] rounded-[50%] flex items-center justify-center`}
//                 onClick={() => setInputAni(!inputAni)}
//               >
//                 <a className="text-white text-[22px] 546:text-[20px]">
//                   <IoSearch />
//                 </a>
//               </div>
//             </div>

//             <Link
//               to={`/basket`}
//               className="flex items-center gap-2 border-2 border-solid border-gray-300 p-2 rounded-3xl"
//               onMouseOver={() => setBasketAni(true)}
//               onMouseOut={() => setBasketAni(false)}
//             >
//               <div className="w-[40px] lg:w-[35px] 546:w-[33px] h-[40px] lg:h-[35px] 546:h-[33px]  rounded-[50%] bg-[#274C5B] flex items-center justify-center">
//                 <a className="text-[22px] 546:text-[20px] text-white">
//                   <BsCart3 />
//                 </a>
//               </div>
//               {basketAni ? (
//                 <h1 className="text-[#274C5B] text-[24px] lg:text-[20px] 546:text-[16px] font-bold">
//                   Cart ({basket.length ? basket.length : 0})
//                 </h1>
//               ) : null}
//             </Link>
//           </div>
//           <div
//             onClick={() => setModal(true)}
//             className="flex items-center flex-col cursor-pointer"
//           >
//             <img
//               src={user ? (user.photoUrl ? user.photoUrl : userfoto) : userIcon}
//               alt=""
//               className="w-[55px] lg:w-[45px] md:w-[43px] sm:w-[40px] 546:w-[35px]"
//             />
//             <h1 className="text-xl lg:text-[15px] md:text-[14px] sm:text-[14px] 546:text-[13px] font-bold">
//               {user
//                 ? user.displayName
//                   ? user.displayName
//                   : user.email
//                 : "User Name"}
//             </h1>
//           </div>

//           {modal ? (
//             <div className="">
//               <div className="w-[700px] lg:w-[650px] 867:w-[580px] md:w-[550px] sm:w-[500px] 546:w-[400px] h-[400px] lg:h-[350px] md:h-[300px] sm:h-[280px] 546:h-[250px] 867:h-[320px]  flex items-center justify-center flex-col gap-4 bg-gray-200 rounded-3xl fixed top-[90%] left-[25%] lg:left-[18%] 867:left-[16%] md:left-[14%] sm:left-[14%] 546:left-[13%] z-[60]">
//                 <div className="relative z-0 w-[80%] sm:w-[70%] 546:w-[60%] mb-5 group">
//                   <input
//                     onChange={(e) => setEmail(e.target.value)}
//                     value={email}
//                     type="text"
//                     className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                     placeholder=" "
//                   />
//                   <label
//                     for="floating_last_name"
//                     className="peer-focus:font-medium absolute text-xl sm:text-2xl 546:text-1xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                   >
//                     Email address
//                   </label>
//                 </div>
//                 <div className="relative z-0 w-[80%] sm:w-[70%] 546:w-[60%] mb-5 group">
//                   <input
//                     onChange={(e) => setPassword(e.target.value)}
//                     value={password}
//                     type="password"
//                     className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                     placeholder=" "
//                   />
//                   <label
//                     for="floating_last_name"
//                     className="peer-focus:font-medium absolute text-xl sm:text-2xl 546:text-1xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//                   >
//                     Password
//                   </label>
//                 </div>
//                 <div className="flex items-center">
//                   <button
//                     type="button"
//                     className="text-white bg-[#699e7c] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
//                     onClick={handleLogIn}
//                   >
//                     Sign In
//                   </button>
//                   <button
//                     className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
//                     onClick={handleRegister}
//                   >
//                     Register
//                   </button>
//                   <button
//                     type="button"
//                     className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 546:px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
//                     onClick={handleGoogle}
//                   >
//                     <svg
//                       className="w-4 h-4 me-2"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="currentColor"
//                       viewBox="0 0 18 19"
//                     >
//                       <path
//                         fill-rule="evenodd"
//                         d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
//                         clip-rule="evenodd"
//                       />
//                     </svg>
//                     Sign in with Google
//                   </button>
//                   <a
//                     onClick={() => setModal(false)}
//                     className=" absolute top-[15px] right-[15px] text-3xl cursor-pointer"
//                   >
//                     <IoCloseCircleOutline />
//                   </a>
//                 </div>
//                 {error.length ? (
//                   <div
//                     class="flex items-center p-4 mb-4 text-xl text-white rounded-lg bg-red-700 dark:bg-gray-800 dark:text-red-600"
//                     role="alert"
//                   >
//                     <svg
//                       class="flex-shrink-0 inline w-4 h-4 me-3"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
//                     </svg>
//                     <span class="sr-only">Info</span>
//                     <div>
//                       <span class="font-medium">{error}</span>
//                     </div>
//                   </div>
//                 ) : null}
//               </div>
//               <div className="bg"></div>
//             </div>
//           ) : null}
//           {user ? (
//             <button
//               onClick={() => logOut()}
//               className="text-2xl fixed top-6 right-3 lg:right-[40px]"
//             >
//               <RiLogoutCircleRLine />
//             </button>
//           ) : null}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import logo from "../../assets/Logo (7).png";
import { Link, useNavigate } from "react-router-dom";
import { IoSearch, IoSearchSharp } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseCircleOutline } from "react-icons/io5";
import userIcon from "../../assets/userIcon.webp";
import userfoto from "../../assets/3135715.png";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useAuth } from "../context/AuthContext";
import { searchProduct } from "../../redux/reducers/addProductSlice";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
  const { register, signInWithGoogle, logOut, logIn } = useAuth();
  const { basket, user } = useSelector((s) => s.add);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [modal, setModal] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [basketAni, setBasketAni] = useState(false);
  const [inputAni, setInputAni] = useState(false);
  const [isOnclick, setIsOnclick] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // состояние для бургер-меню

  async function handleRegister() {
    try {
      await register(email, password);
      setEmail("");
      setPassword("");
      setModal(false);
    } catch (error) {
      setError(error.message);
    }
  }
  async function handleLogIn() {
    try {
      await logIn(email, password);
      setEmail("");
      setPassword("");
      setModal(false);
    } catch (error) {
      setError(error.message);
    }
  }
  function handleGoogle() {
    signInWithGoogle();
    nav("/");
    setModal(false);
  }

  return (
    <div className="header py-[30px] sticky top-0 backdrop-blur-sm z-[100]">
      <div className="container">
        <div className="flex items-center justify-between max-[1024px]:justify-around lg:justify-around">
          <img
            src={logo}
            alt=""
            className="w-[200px] lg:w-[160px] 867:w-[150px] md:w-[140px] sm:w-0 546:w-0 400:w-0 320:w-0"
          />
          {/* Links section */}
          <div className="hidden xs:flex text-[25px] 867:text-[22px] md:text-[20px] 546:text-[16px] text-[#274C5B] font-bold items-center gap-7 768:gap-3 lg:text-[20px] lg:gap-5">
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>About</Link>
            <Link to={user ? "/shop" : "*"}>Shop</Link>
          </div>
          {/* Burger menu */}
          <div className="xs:hidden">
            <button
              className="text-4xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
          {/* Burger menu dropdown */}
          {isMenuOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 z-[60] flex flex-col items-center justify-center">
              <div className="text-white text-[25px] 400:text-[23px] font-bold flex items-center gap-6">
                <Link to={"/"} onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link to={"/"} onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
                <Link
                  to={user ? "/shop" : "*"}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Shop
                </Link>
              </div>
            </div>
          )}
          {/* Other components */}
          <div className="flex items-center gap-3 lg:gap-2">
            <div className="relative flex items-center">
              {inputAni ? (
                <input
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      dispatch(searchProduct(inputValue));
                      nav(`/search/${inputValue}`);
                      setInputValue("");
                      setInputAni(false);
                    }
                  }}
                  type="text"
                  placeholder="search..."
                  className={` absolute text-2xl 400:text-1xl left-[-280px] 400:ml-[200px] 320:ml-[190px] top-[45px] 320:mt-[25px] text-black bg-gray-200 py-[10px] lg:py-[8px] px-[30px] lg:px-[25px] md:px-[20px] 400:px-[10px] 320:px-[10px] 400:mt-[20px] rounded-3xl outline-none md:absolute`}
                />
              ) : null}
              <div
                className={`bg-[#7EB693] cursor-pointer ${
                  inputAni ? "top-[-22px]" : "top-[-23px]"
                } max-[1024px]:top-[-25px] right-3 w-[43px] 546:w-[35px] lg:w-[40px] h-[43px] 546:h-[35px] lg:h-[40px] rounded-[50%] flex items-center justify-center`}
                onClick={() => setInputAni(!inputAni)}
              >
                <a className="text-white text-[22px] 546:text-[20px]">
                  <IoSearch />
                </a>
              </div>
            </div>

            <Link
              to={`/basket`}
              className="flex items-center gap-2 border-2 border-solid border-gray-300 p-2 rounded-3xl"
              onMouseOver={() => setBasketAni(true)}
              onMouseOut={() => setBasketAni(false)}
            >
              <div className="w-[40px] lg:w-[35px] 546:w-[33px] h-[40px] lg:h-[35px] 546:h-[33px] rounded-[50%] bg-[#274C5B] flex items-center justify-center">
                <a className="text-[22px] 546:text-[20px] text-white">
                  <BsCart3 />
                </a>
              </div>
              {basketAni ? (
                <h1 className="text-[#274C5B] text-[24px] lg:text-[20px] 546:text-[16px] 400:text-[16px] 320:text-[16px] font-bold">
                  Cart ({basket.length ? basket.length : 0})
                </h1>
              ) : null}
            </Link>
          </div>
          <div
            onClick={() => setModal(true)}
            className="flex items-center flex-col cursor-pointer"
          >
            <img
              src={user ? (user.photoUrl ? user.photoUrl : userfoto) : userIcon}
              alt=""
              className="w-[55px] lg:w-[45px] md:w-[43px] sm:w-[40px] 546:w-[35px] 400:w-[39px] 320:w-[39px]"
            />
            <h1 className="text-xl lg:text-[15px] md:text-[14px] sm:text-[14px] 546:text-[13px] 400:text-xs 320:text-[0px] font-bold">
              {user
                ? user.displayName
                  ? user.displayName
                  : user.email
                : "User Name"}
            </h1>
          </div>

          {modal ? (
            <div className="">
              <div className="w-[700px] lg:w-[650px] 867:w-[580px] md:w-[550px] sm:w-[500px] 546:w-[400px] 400:w-[300px] 320:w-[280px] h-[400px] lg:h-[350px] md:h-[300px] sm:h-[280px] 546:h-[250px] 400:h-[370px] 320:h-[370px] 867:h-[320px] flex items-center justify-center flex-col gap-4 bg-gray-200 rounded-3xl fixed top-[90%] left-[25%] lg:left-[18%] 867:left-[16%] md:left-[14%] sm:left-[14%] 546:left-[13%] 400:left-[13%] 320:left-[6%] z-[60]">
                <div className="relative z-0 w-[80%] sm:w-[70%] 546:w-[60%] mb-5 group">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_last_name"
                    className="peer-focus:font-medium absolute text-xl sm:text-2xl 546:text-1xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative z-0 w-[80%] sm:w-[70%] 546:w-[60%] mb-5 group">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    className="block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_last_name"
                    className="peer-focus:font-medium absolute text-xl sm:text-2xl 546:text-1xl text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                </div>
                <div className="flex items-center 400:flex-col 320:flex-col">
                  <button
                    type="button"
                    className="text-white bg-[#699e7c] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 400:px-16 320:px-16 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
                    onClick={handleLogIn}
                  >
                    Sign In
                  </button>
                  <button
                    className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 400:px-16 320:px-16 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
                    onClick={handleRegister}
                  >
                    Register
                  </button>
                  <button
                    type="button"
                    className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 546:px-4 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
                    onClick={handleGoogle}
                  >
                    <svg
                      className="w-4 h-4 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 19"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Sign in with Google
                  </button>
                  <a
                    onClick={() => setModal(false)}
                    className="absolute top-[15px] right-[15px] text-3xl cursor-pointer"
                  >
                    <IoCloseCircleOutline />
                  </a>
                </div>
                {error.length ? (
                  <div
                    class="flex items-center p-4 mb-4 text-xl text-white rounded-lg bg-red-700 dark:bg-gray-800 dark:text-red-600"
                    role="alert"
                  >
                    <svg
                      class="flex-shrink-0 inline w-4 h-4 me-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span class="sr-only">Info</span>
                    <div>
                      <span class="font-medium">{error}</span>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="bg"></div>
            </div>
          ) : null}
          {user ? (
            <button
              onClick={() => logOut()}
              className="text-2xl fixed top-6 right-3 lg:right-[40px]"
            >
              <RiLogoutCircleRLine />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
