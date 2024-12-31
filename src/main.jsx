import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";

import App from "./App.jsx";
import Team from "./components/Team.jsx";
import Afspraak from "./components/Afspraak.jsx";
import Routebeschrijving from "./components/Routebeschrijving.jsx";
import Spoed from "./components/Spoed.jsx";
import Openingstijden from "./components/Openingstijden.jsx";
import Telefoon from "./components/Telefoon.jsx";
import Behandeling from "./components/Behandeling.jsx";
import Preventie from "./components/Preventie.jsx";
import Kwaliteit from "./components/Kwaliteit.jsx";
import Tarieven from "./components/Tarieven.jsx";
import Betaling from "./components/Betaling.jsx";
import VerloopBehandelingImplantologie from "./components/VerloopBehandelingImplantologie.jsx";
import VerloopBehandeling from "./components/VerloopBehandeling.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
    errorElement: (
      <Layout>
        <div className="flex items-center justify-center h-screen w-screen text-center">
          <div className="m-6 p-4">
            <div className="text-2xl">Helaas bestaat deze pagina niet.</div>
            <div className="mt-6">
              <a
                className="bg-red text-white text-sm rounded-md p-2 px-6 uppercase font-light transition-colors duration-200 hover:bg-opacity-50"
                href="/"
              >
                Ga terug
              </a>
            </div>
          </div>
        </div>
      </Layout>
    ),
  },
  {
    path: "/team",
    element: (
      <Layout>
        <Team />
      </Layout>
    ),
  },
  {
    path: "/afspraak-maken",
    element: (
      <Layout>
        <Afspraak />
      </Layout>
    ),
  },
  {
    path: "/Routebeschrijving",
    element: (
      <Layout>
        <Routebeschrijving />
      </Layout>
    ),
  },
  {
    path: "/spoed",
    element: (
      <Layout>
        <Spoed />
      </Layout>
    ),
  },
  {
    path: "/openingstijden",
    element: (
      <Layout>
        <Openingstijden />
      </Layout>
    ),
  },
  {
    path: "/telefoon",
    element: (
      <Layout>
        <Telefoon />
      </Layout>
    ),
  },
  {
    path: "/behandeling",
    element: (
      <Layout>
        <Behandeling />
      </Layout>
    ),
  },
  {
    path: "/preventie",
    element: (
      <Layout>
        <Preventie />
      </Layout>
    ),
  },
  {
    path: "/kwaliteit",
    element: (
      <Layout>
        <Kwaliteit />
      </Layout>
    ),
  },
  {
    path: "/tarieven",
    element: (
      <Layout>
        <Tarieven />
      </Layout>
    ),
  },
  {
    path: "/betaling",
    element: (
      <Layout>
        <Betaling />
      </Layout>
    ),
  },
  {
    path: "/verloop-behandeling-implantologie",
    element: (
      <Layout>
        <VerloopBehandelingImplantologie />
      </Layout>
    ),
  },
  {
    path: "/hoe-verloopt-de-behandeling",
    element: (
      <Layout>
        <VerloopBehandeling />
      </Layout>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
