import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Storymap from "./pages/Storymap.jsx";
import Muralistas from "./pages/Muralistas.jsx";
import Soundscapes from "./pages/Soundscapes.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/storymap",
    element: <Storymap />,
  },
  {
    path: "/muralistas",
    element: <Muralistas/>
  },
  {
    path: "/soundscapes",
    element: <Soundscapes/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
