import Update from "@/components/update";
import { useState } from "react";
import "./App.scss";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import Home from "./pages/Home"

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Entities from "./pages/Entities";

console.log(
  "[App.tsx]",
  `Hello world from Electron ${process.versions.electron}!`
);

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/entities",
        element: <Entities />,
      }
    ],
  },
  /* {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  }, */
]);

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App" >
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
