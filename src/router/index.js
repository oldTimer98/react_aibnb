import { lazy } from "react"
import { Navigate } from "react-router-dom"
const Home = lazy(() => import("@/views/home"))
const Entire = lazy(() => import("@/views/entire"))
const Detail = lazy(() => import("@/views/detail"))
const routes = [
  {
    path: "",
    element: <Navigate to="/home"></Navigate>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/detail",
    element: <Detail></Detail>,
  },
  {
    path: "/entire",
    element: <Entire></Entire>,
  },
]
export default routes
