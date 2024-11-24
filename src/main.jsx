import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Team from "./components/Team.jsx";

import App from "./App.jsx";
import Afspraak from "./components/Afspraak.jsx";
import Routebeschrijving from "./components/Routebeschrijving.jsx";
import Spoed from "./components/Spoed.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div className="flex items-center justify-center h-screen w-screen text-center">
        <div className="m-6 p-4">
          <div className="text-2xl">Helaas bestaat deze pagina niet.</div>
          <div className="mt-6">
            <a
              className="bg-red text-white text-sm rounded-md p-2 px-6 uppercase font-lighttransition-colors duration-500 hover:bg-opacity-50"
              href="/"
            >
              Ga terug
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/afspraak-maken",
    element: <Afspraak />,
  },
  {
    path: "/Routebeschrijving",
    element: <Routebeschrijving />,
  },
  {
    path: "/spoed",
    element: <Spoed />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
