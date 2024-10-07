import Layout from "./components/Layout";
import { createBrowserRouter } from "react-router-dom";
import SalePage from "./pages/SalePage";
import Dashboard from "./pages/Dashboard";
import VoucherPage from "./pages/VoucherPage";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Layout/>,
        errorElement : <NotFound/>,
        children : [
            {
                path : "/",
                element : <Dashboard/>
            },
            {
                path : "/sale",
                element : <SalePage/>
            },
            {
                path : "/voucher",
                element : <VoucherPage/>
            },
            {
                path : "/product",
                element : <ProductPage/>
            }
           
        ]
    }
])

export default router