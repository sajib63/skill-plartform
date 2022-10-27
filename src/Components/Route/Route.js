import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import Blog from "../Blog/Blog";
import Courses from "../Courses/Courses";
import Details from "../Details/Details";
import ErrorPage from "../ErrorPage/ErrorPage";
import Faq from "../Faq/Faq";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Premium from "../Premium/Premium";
import Register from "../Register/Register";

export const route=createBrowserRouter([
    {
        path:'/',
        errorElement:<ErrorPage></ErrorPage>,
        element:<Main></Main>,
        children:[
            {
              path:'/',
              element:<Home></Home> 
            },
            {
                path:'/courses',
                element:<Courses></Courses>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },

            {
                path:'/details/:id',
                element:<Details></Details>,
                loader:({params})=> fetch(`https://assignment-10-server-five.vercel.app/data/${params.id}`)
            },
            {
                path:'/premium/:id',
                element:<PrivateRoute><Premium></Premium></PrivateRoute>,
                loader:({params})=> fetch(`https://assignment-10-server-five.vercel.app/data/${params.id}`)
            }
            
        ]
    }
])