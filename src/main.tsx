import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Layout } from "./layout/Layout";
import { Index } from "./components/Index";
import { Pokedex } from "./components/Pokedex";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage from "./error-page";

// const navItems = createBrowserRouter([
//   {
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         element: <Index />,
//       },
//       {
//         path: "/pokedex",
//         element: <Pokedex />,
//       },
//       {
//         path: "/legendaries",
//         element: <Pokedex />,
//       },
//       {
//         path: "/documentation",
//         element: <Pokedex />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<Index />} />
      <Route path="/pokedex" element={<Pokedex />} />
      <Route path="/about" element={<Index />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
