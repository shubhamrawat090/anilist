import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Top100 from "./components/Top100";
import Genres from "./components/Genres";
import Categories from "./components/Categories";
import Random from "./components/Random";

function App() {
  return (
    <div className="flex min-h-screen w-screen flex-col bg-bannerBg-light-2">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-100" element={<Top100 />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </div>
  );
}

export default App;
