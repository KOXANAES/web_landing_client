import { Route, Routes } from "react-router-dom"
import { AppRoutes } from "./AppRoutes"

const AppRouter = () => { 

  return( 
    <Routes>
    {AppRoutes.map(({ path, Component }) => (
      <Route key={path} path={path} element={<Component />} />
    ))}
  </Routes>
  )
}

export default AppRouter