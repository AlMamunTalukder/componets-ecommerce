import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import Headers from "./pages/Headers"
import Cards from "./pages/Cards"
import Footers from "./pages/Footers"
import Heros from "./pages/Heros"
import Categories from "./pages/Categories"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>Not Found</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "headers",
        element: <Headers />,
      },
      {
        path: "cards",
        element: <Cards />,
      },
      {
        path: "footers",
        element: <Footers />,
      },
      {
        path: "heros",
        element: <Heros />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
    ],
  },
])
