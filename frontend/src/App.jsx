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

// styles
import "./App.scss";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />

        <Route path="/result" element={<Product />} />

        <Route path="/choiceform" element={<ChoiceForm />} />

      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
