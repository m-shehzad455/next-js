import React from "react"
import Dashboard from "../Components/Dashboard"
import { ThemeProvider } from "next-themes";


const Home = () => {
  return (
   <div>
    <ThemeProvider>
    <Dashboard />
    </ThemeProvider>
    
   </div>
  )
}

export default Home
