import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/pages/Home";
import { Globalstate } from "./Globalstate";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "./components/pages/AdminLogin";
import AdminDashBoard from "./components/pages/AdminDashBoard";
import { useContext, useEffect } from "react";
import EditProduct from "./components/products/EditProduct";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
function App() {
  useEffect(() => {
    toast.success("أهلاً بكم في سوق أبنود");
  }, []);
  const state = useContext(Globalstate);
  const [theam, setTheam] = state.theam;

  return (
    <div
      className="App"
      style={{ backgroundColor: theam === "dark" ? "black" : "white" }}
    >
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/admin" exact element={<AdminLogin />} />
          <Route path="/admin-panel" exact element={<AdminDashBoard />} />
          <Route path="/edit/:id" exact element={<EditProduct />} />
        </Routes>
        <Footer />

        <ToastContainer
          position="top-left"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </HashRouter>
    </div>
  );
}

export default App;
