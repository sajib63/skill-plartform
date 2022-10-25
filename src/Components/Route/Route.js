import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home";

export const route=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
              path:'/',
              element:<Home></Home> 
            }
        ]
    }
])