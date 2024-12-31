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
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-gray-50">
          <div className="max-w-md mx-auto text-center px-4">
            <h1 className="text-9xl font-bold text-red-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Oeps! Pagina niet gevonden
            </h2>
            <p className="text-gray-600 mb-8">
              De pagina die u zoekt bestaat niet of is verplaatst.
            </p>
            <a
              href="/"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-red-700 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Terug naar de beginpagina
            </a>
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
