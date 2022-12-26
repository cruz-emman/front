import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./pages/footer/Footer.jsx";
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import Register from './pages/register/Register.jsx'

import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer } from 'react-toastify'
import Seller from "./pages/seller/Seller.jsx";

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
         
         {/* With Account */}
        {/* <Route element={<ProtectedRoute />} > */}
          <Route path="/" element={<Home />} />



          {/* Seller Information */}
          <Route path="/sProfile/:id" element={<Seller />} /> 
        {/* </Route> */}


        {/* No Account */}
        {/* <Route element={<AnonymousRoute />} > */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        {/* </Route> */}

      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
