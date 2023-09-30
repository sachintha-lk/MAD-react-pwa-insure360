import { Routes, Route } from "react-router-dom";

import Test from "./pages/Test";
import NavBar from "./components/navbar/NavBar";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PrivateRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report" element={<Dashboard />} />
          <Route path="/reports" element={<Dashboard />} />
          <Route path="/policies" element={<Dashboard />} />
          <Route path="/newpolicy" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
