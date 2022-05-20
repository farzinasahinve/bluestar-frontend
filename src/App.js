import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './features/login/Login';
import Register from './features/register/Register';
import Dashboard from './features/dashboard/Dashboard'
import ForgotPassword from "./features/login/ForgotPassword";
import RegisterSuccess from "./features/register/RegisterSuccess"

function App() {
  return (
    <div className="wrapper-page">
      <BrowserRouter>
        <Routes>
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="register-success" element={<RegisterSuccess/>}/>
          <Route path="forgot-password" element={<ForgotPassword/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
