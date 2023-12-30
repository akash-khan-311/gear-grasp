import { createBrowserRouter } from "react-router-dom"
import Root from "../Layout/Root"
import Home from "../Pages/Home/Header/Home/Home"


const Router = createBrowserRouter([
    {path:'/', element: <Root/> , children: [
        {path:'/', element: <Home/>}
    ]}
])

export default Router
