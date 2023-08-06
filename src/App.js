import Categories from "./Pages/Categories";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./Pages/SearchPage";
import Header from "./Components/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}
