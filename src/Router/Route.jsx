import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import CardDetails from "../Pages/CardsDetails/CardDetails";

const mainRouter = createBrowserRouter([
    {
        path : "/",
        element : <HomeLayout></HomeLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader :()=>fetch('/Datas.json')
            },
            {
                path : "/donation",
                element : <Donation></Donation>
            },
            {
                path : "/statistics",
                element : <Statistics></Statistics>
            },
            {
                path : "/cardsdetails/:id",
                element : <CardDetails></CardDetails>,
                loader : () => fetch('/Datas.json')
            }
        ]
    }
])

export default mainRouter;
