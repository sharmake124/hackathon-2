import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages & components
import Items from "./pages/Items";
import Signup from "./pages/Signup";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/items" element={<Items />} />,
        <Route path="/signup" element={<Signup />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
