import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";
import Category from "../../Pages/Catagory/Category/Category";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import News from "../../Pages/News/News/News";
import TermsAndConditions from "../../Pages/Shared/Others/TermsAndConditions/TermsAndConditions";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://dragon-news-server-orcin-gamma.vercel.app/news')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://dragon-news-server-orcin-gamma.vercel.app/category/${params.id}`)
                
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`https://dragon-news-server-orcin-gamma.vercel.app/news/${params.id}`)
            },
            {
                path: 'login',
                element:<Login></Login>,
            },
            {
                path: 'register',
                element:<Register></Register>
            },
            {
                path: 'terms',
                element:<TermsAndConditions></TermsAndConditions>
            }
        ]
    }
])