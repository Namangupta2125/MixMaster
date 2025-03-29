import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  HomeLayout,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from "./pages/index";

import { loader as landingLoader } from "./pages/Landing";
import {loader as cockTailLoader} from "./pages/Cocktail"
import { useGlobalContext } from "./Context";
import { QueryClient } from "@tanstack/react-query";


const queryClient = new QueryClient()
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeLayout />,
      HydrateFallback:()=>null,
      errorElement:<Error />,
      children: [
        {
          path: "About",
          element: <About />,
        },
        {
          index:true,
          loader:landingLoader(queryClient),
          errorElement:<SinglePageError/>,
          element: <Landing />,
        },
        {
          path: "Newsletter",
          element: <Newsletter />,
        },
        {
          path: "Cocktail/:id",
          loader:cockTailLoader,
          errorElement:<SinglePageError/>,
          element: <Cocktail />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

const App = () => {
  return (
      <RouterProvider router={router} />
  );
};

export default App;
