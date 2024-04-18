import {useContext, createContext, useEffect, useState, ReactNode} from "react"
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  User,
  onAuthStateChanged,
} from "firebase/auth"
import {auth} from "../firebase"
type Props = {
  children: ReactNode
}
// type AuthContextType =
const AuthContext = createContext<
  | {
      googleSignIn: () => void
      logOut: () => void
      user: User | null
    }
  | undefined
>(undefined)

export const AuthContextProvider = ({children}: Props) => {
  const [user, setUser] = useState<User | null>(null)

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    // signInWithRedirect(auth, provider)
  }

  const logOut = () => {
    signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log("User", currentUser)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider value={{googleSignIn, logOut, user}}>
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)
}
