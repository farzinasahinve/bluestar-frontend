import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './features/login/Login';
import Register from './features/register/Register';
import Dashboard from './features/dashboard/Dashboard'
import ForgotPassword from "./features/login/ForgotPassword";
import RegisterSuccess from "./features/register/RegisterSuccess"
import Drivers from "./features/drivers/Drivers";
import Vehicles from "./features/vehicles/Vehicles";
import ELD from "./features/eld/ELD";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="register-success" element={<RegisterSuccess/>}/>
          <Route path="forgot-password" element={<ForgotPassword/>}/>
          <Route path="settings">
            <Route path="drivers" element={<Drivers/>}/>
            <Route path="vehicles" element={<Vehicles/>}/>
            <Route path="elds" element={<ELD/>}/>
            {/* <Route path="drivers" element={<Drivers/>}/> */}
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
