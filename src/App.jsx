
import { Route, Routes } from "react-router-dom";
import "./app.css";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects.jsx";
import Team from "./pages/Team/Team.jsx";
import Footer from '@/components/Footer/Footer.jsx';
import Header from "@/components/Header/Header";

function App() {

  return (
    <main className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects/:id" element={<Projects />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;