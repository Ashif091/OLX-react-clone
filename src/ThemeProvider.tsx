import React, {ReactNode, createContext, useContext, useState} from "react"

interface Props {
  children: ReactNode
}
export const ThemeContext = createContext<{theme: boolean;chagerFun:()=>void;getLogin:()=>void;login:boolean} | undefined>(undefined)
export function useTheme(){
    return useContext(ThemeContext)
}
function ThemeProvider({children}: Props) {
    const [theme,setTheme]= useState(false)
    const [login,setLogin] = useState(false)
    const chagerFun = ()=>{
        setTheme(prevTheme => !prevTheme)
    }
    const getLogin = ()=>{
      setLogin(prevStatus => !prevStatus)
  }
  return (
    <>
      <ThemeContext.Provider value={{theme,chagerFun,login,getLogin}}>
        {children}
      </ThemeContext.Provider>
    </>
  )
}

export default ThemeProvider
