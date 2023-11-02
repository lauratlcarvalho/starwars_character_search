import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import CharacterList from "./pages/CharacterList/CharacterList";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
