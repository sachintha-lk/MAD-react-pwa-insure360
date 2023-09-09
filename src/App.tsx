import { Routes, Route } from "react-router-dom";
import Test from "./pages/Test";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
