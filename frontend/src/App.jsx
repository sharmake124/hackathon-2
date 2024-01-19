import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages & components
import Home from "./pages/Home";

import Product from "./pages/Product";

import ChoiceForm from "./pages/ChoiceForm";

import Signup from "./pages/SignupV2";

// styles

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Product />} />
        <Route path="/choiceform" element={<ChoiceForm />} />
        <Route path="/signup" element={<Signup />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
