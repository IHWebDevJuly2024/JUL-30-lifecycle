import "./App.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PokeList } from "./pages/PokeList";
import { CharactersList } from "./pages/CharactersList";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemons" element={<PokeList />} />
        <Route path="/characters" element={<CharactersList/>}/>
        <Route path="/about" element={<h1>This is about</h1>} />
      </Routes>
    </>
  );
}

export default App;
