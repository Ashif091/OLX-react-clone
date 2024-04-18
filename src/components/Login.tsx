import React from "react"
import {UserAuth} from "../context/AuthContext"
import {useTheme} from "../ThemeProvider"
import { MdClose } from "react-icons/md";
import GoogleButton from "react-google-button"
const Login = () => {
  const AuthData = UserAuth()
  const context = useTheme()

  const handleGoogleSignIn = async () => {
    try {
      AuthData?.googleSignIn()
      context?.getLogin()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      {context?.login ? (
        <div className="absolute top-0 left-0 w-full h-screen bg-black/50 ">
          <div className="fixed inset-0 flex items-center justify-center  ">
            <div className="bg-white p-6 rounded shadow-lg min-w-44 min-h-72 relative items-center text-center" >
                <h1 className="text-lg mb-14">Start Selling!</h1>
                <p className="absolute top-2 right-2" onClick={context?.getLogin}><MdClose size={28} /></p>
              <GoogleButton onClick={handleGoogleSignIn}/>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default Login
