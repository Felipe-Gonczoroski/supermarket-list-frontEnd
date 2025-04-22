import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomeScreen, ListScreen } from "./screens/";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/list" element={<ListScreen />} />
    </Routes>
  );
}

export default App;
