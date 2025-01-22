import Navbar from "./components/navbar/Navbar"
import './App.scss'
import { BrowserRouter } from "react-router-dom"
import AppRouter from "./router/AppRouter"
import { useContext, useEffect } from "react"
import { Context } from "./main"
import { observer } from "mobx-react-lite"

function App() {

  const {authStore} = useContext(Context)

  useEffect(() => { 
    if(localStorage.getItem('token')) { 
      authStore.checkAuth()
    }
  }, [])

  if(authStore.isLoading === true) { 
    return(
      <h1>LOADING</h1>
    )
  }

  return (
    <BrowserRouter>
      <Navbar/> 
      <AppRouter/>
    </BrowserRouter>
  )
}

export default observer(App)
