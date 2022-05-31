import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './features/login/Login';
import Register from './features/register/Register';
import Dashboard from './features/dashboard/Dashboard'
import ForgotPassword from "./features/login/ForgotPassword";
import RegisterSuccess from "./features/register/RegisterSuccess"
import Drivers from "./features/drivers/Drivers";
import Vehicles from "./features/vehicles/Vehicles";
import ELD from "./features/eld/ELD";
import PortalUser from "./features/portalUsers/PortalUser";
import CompanyView from "./features/company/CompanyView"
import DriverForm from "./features/drivers/DriverForm";
import VehicleForm from "./features/vehicles/VehicleForm";
import VehicleEditForm from "./features/vehicles/VehicleEditForm";
import ELDForm from "./features/eld/ELDForm";
import PrivateRoute from './PrivateRoute'

function App() {
  return (
    <div className="">
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
          <Route path="settings/drivers" element={<PrivateRoute><Drivers/></PrivateRoute>}/>
          <Route path="settings">
            {/* <Route path="drivers" element={<PrivateRoute><Drivers/></PrivateRoute>}/> */}
            <Route path="drivers/add" element={<DriverForm/>}/>
            <Route path="vehicles" element={<Vehicles/>}/>
            <Route path="vehicles/add" element={<VehicleForm/>}/>
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
