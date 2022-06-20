import { Routes, Route } from "react-router-dom";

import Dashboard from "./sections/dashboard/Dashboard";
import Login from "./sections/login/Login";
import TwoFactor from "./sections/two-factor-auth/TwoFactor";
import UpdatePassword from "./sections/update-password/UpdatePassword";

const App = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/auth" element={<TwoFactor />} />
      <Route path="/update-password" element={<UpdatePassword />} />
    </Routes>
  );
};

export default App;
