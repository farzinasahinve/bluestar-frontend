import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";


import VehicleEditForm from "./features/vehicles/VehicleEditForm";

import Login from "./components/Login/Login";
import ForgotPassword from "./components/Login/ForgotPassword";
import Register from './components/Register/Register';
import RegisterSuccess from "./components/Register/RegisterSuccess"
import Dashboard from './components/dashboard/Dashboard'
import Drivers from "./components/Drivers/Drivers";
import DriverForm from "./components/Drivers/DriverForm";
import Vehicles from "./components/Vehicles/Vehicles";
import VehicleForm from "./components/Vehicles/VehicleForm";
import CompanyView from "./components/Company/CompanyView"
import PortalUser from "./components/portalUsers/PortalUser";
import ELD from "./components/eld/ELD";
import ELDForm from "./components/eld/ELDForm";


function App() {
  return (
    <div className="">
      <ToastContainer position="top-right" autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Routes>
        <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
          <Route path="/" element={<Login/>}/>
          <Route path="login" element={<Login/>}/>

          <Route path="register" element={<Register/>}/>
          <Route path="register-success" element={<RegisterSuccess/>}/>
          <Route path="forgot-password" element={<ForgotPassword/>}/>
          <Route path="/settings/drivers" element={<PrivateRoute><Drivers/></PrivateRoute>}/>
          <Route path="/drivers/create" element={<DriverForm/>}/>
          <Route path="/settings/vehicles" element={<Vehicles/>}/>
          <Route path="settings">
            {/* <Route path="drivers" element={<PrivateRoute><Drivers/></PrivateRoute>}/> */}
            <Route path="vehicles/create" element={<VehicleForm/>}/>
            <Route path="vehicles/:id" element={<VehicleEditForm/>}/>
            <Route path="elds" element={<ELD/>}/>
            <Route path="elds/add" element={<ELDForm/>}/>
            <Route path="portal-users" element={<PortalUser/>}/>
            <Route path="company" element={<PrivateRoute><CompanyView/></PrivateRoute>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
