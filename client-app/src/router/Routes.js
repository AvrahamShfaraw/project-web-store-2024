import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import App from "../App";
import Category from "../components/Category/Category";


export const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: "/home", element: <Home /> },
            { path: "/collection", element: <Category /> },
            
            {
                path: '*',
                element: <Navigate replace to='/' />
            }
        ]
    }


];
export const router = createBrowserRouter(routes);

