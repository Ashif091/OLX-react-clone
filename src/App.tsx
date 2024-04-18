import React, {useState} from "react"
import Navbar from "./components/Navbar"
import ThemeProvider from "./ThemeProvider"
import Footer from "./components/Footer"
import ItemRow from "./components/ItemRow"
import Product from "./components/Product"
import { AuthContextProvider } from "./context/AuthContext"
import Login from "./components/Login"

function App() {
  return (
    <>
     <AuthContextProvider>
      <ThemeProvider>
        <Navbar />

        <ItemRow>
          <Product />
          
        </ItemRow>
        <Footer />
        <Login/>
      </ThemeProvider>
      </AuthContextProvider>
    </>
  )
}

export default App
