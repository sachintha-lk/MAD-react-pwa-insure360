import { Routes, Route } from "react-router-dom";
import Test from "./pages/Test";
import NavBar from "./components/navbar/NavBar";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<h1>Sign Up</h1>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
