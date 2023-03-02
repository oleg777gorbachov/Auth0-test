import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import Basket from "../pages/Basket";
import Product from "../pages/Product";
import Profile from "../pages/Profile";
import Store from "../pages/Store";
import Patches from "../utils/Patches";

const router = createBrowserRouter([
  {
    path: Patches.HOME,
    element: <App />,
  },
  {
    path: Patches.STORE,
    element: <Store />,
  },
  {
    path: Patches.BASKET,
    element: <Basket />,
  },
  {
    path: Patches.PROFILE,
    element: <Profile />,
  },
  {
    path: Patches.PRODUCT + ":id",
    element: <Product />,
  },
]);

export default router;
