import { Route, Routes } from "react-router";
import { DashboardRoutes } from "../dashboard/routes/DashboardRoutes";

export const KticketRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={ <DashboardRoutes/> } />
    </Routes>
  )
}
