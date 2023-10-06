// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import "./styles/App.css";
import { router } from "./app/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
