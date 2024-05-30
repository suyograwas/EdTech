import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages";
import { Navbar, Footer } from "./components/common";

function App() {
  return (
    <div className=" w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
