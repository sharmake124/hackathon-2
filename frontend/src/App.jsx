import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages & components
import Home from "./pages/Products";
import Signup from "./pages/Signup";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/product" element={<Home />} />,
        <Route path="/signup" element={<Signup />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
