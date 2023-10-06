// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Carrier from "./pages/Carrier";
import Menu from "./pages/Menu";
import Main from "./pages/Main";
import Pagenotfound from "./pages/Pagenotfound";
import Policy from "./pages/Policy";
import "./styles/App.css";
import { router } from "./app/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
