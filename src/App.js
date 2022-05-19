import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './features/login/Login';
import Register from './features/register/Register';
import Dashboard from './features/dashboard/Dashboard'

function App() {
  return (
    <div className="wrapper-page">
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
