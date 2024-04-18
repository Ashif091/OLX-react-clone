import {useTheme} from "../ThemeProvider"
import {IoSearch} from "react-icons/io5"
import {MdDarkMode} from "react-icons/md"
import {CiLight} from "react-icons/ci"
import { UserAuth } from '../context/AuthContext';


function Navbar() {
  const UserData= UserAuth();
  
  const handleSignOut = async () => {
    try {
       UserData?.logOut()
    } catch (error) {
      console.log(error)
    }
  }
  console.log(UserData?.user);
  
  const context = useTheme()
  const setLogin = context?.getLogin
  const darkTheme = "bg-gray-800 text-white"
  const style = context?.theme ? darkTheme : ""
  return (
    <div
      className={`w-full h-16 bg-gray-200 flex justify-between sm:justify-start  items-center  fixed  ${style} `}
    >
      <div className="flex-shrink-0 ml-5 mr-5">
        <svg
          width="48px"
          height="48px"
          viewBox="0 0 1024 1024"
          data-aut-id="icon"
          fill-rule="evenodd"
        >
          <path
            className={`fill-current ${
              !context?.theme ? "text-custom_olx" : "text-gray-200"
            } rui-w4DG7`}
            d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
          ></path>
        </svg>
      </div>

      <input
        type="text"
        placeholder="India"
        className={`h-12 w-64 pl-4 border-2 mr-4 rounded-md ${
          context?.theme ? "bg-gray-800  " : "border-custom_olx "
        } hidden sm:block`}
      />

      <div className=" hidden  w-[38rem]   sm:flex">
        <input
          type="text"
          placeholder="Find Cars, Mobile Phones and more..."
          className={`h-12 w-[90%] pl-4  border-2 rounded-l-md ${
            context?.theme ? "bg-gray-800  " : "border-custom_olx "
          }`}
        />
        <button
          className={`${
            context?.theme ? "bg-gray-200 " : "bg-custom_olx  "
          } h-12 w-12 rounded-r-md pl-3`}
        >
          <IoSearch
            size={28}
            color={`${!context?.theme ? "#ffff  " : "#000000 "}`}
          />
        </button>
      </div>

      <div className="flex justify-between gap-7 ml-16 items-center">
        <span className="cursor-pointer " onClick={context?.chagerFun}>
          {" "}
          {context?.theme ? <CiLight size={28} /> : <MdDarkMode size={28} />}
        </span>
        {UserData?.user?.displayName?<button className="text-blue-400" onClick={handleSignOut}>Logout</button>:<button className="text-blue-400" onClick={setLogin}>Login</button>}
        
        <button className="relative inline-flex items-center justify-center p-4 px-9 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
          <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
          <span className="relative text-gray-200">SELL</span>
        </button>
      </div>
    </div>
  )
}

export default Navbar
