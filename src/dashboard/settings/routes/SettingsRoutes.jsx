import { Route, Routes } from "react-router"
import { SettingsPage } from "../pages"
import { Error404Page } from "../../../error/Error404Page"


export const SettingsRoutes = () => {
  return (
    <Routes>
        <Route  path="/" element={ <SettingsPage/> } />
        <Route  path="/*" element={ <Error404Page/> } />
    </Routes>
  )
}
