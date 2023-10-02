import { Routes, Route } from "react-router-dom";

import Test from "./pages/Test";
import NavBar from "./components/navbar/NavBar";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import PrivateRoutes from "./components/ProtectedRoutes";
import Vehicles from "./pages/Vehicles";
import NewVehicle from "./pages/NewVehicle";
import Reports from "./pages/Reports";
import Report from "./pages/Report";
import { useEffect } from "react";

// import "./../public/firebase-messaging-sw.js";
// import { requestPermission } from "./firebase.js";

function App() {
  useEffect(() => {
    Notification.requestPermission().then((permission) => {
      console.log("Notification permission: " + permission);
    });
  }, []);

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
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/vehicles/new" element={<NewVehicle />} />
          <Route path="/report" element={<Report />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/newpolicy" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
