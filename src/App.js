// App.css first: it defines the base tokens and shared classes (.container,
// .btn, .card) that the per-component stylesheets below build on, and CSS
// injection order follows import order.
import "./App.css";

import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import ProjectDisplay from "./Pages/ProjectDisplay";
import Experience from "./Pages/Experience";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Navbar />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDisplay />} />
              <Route path="/experience" element={<Experience />} />

              {/* Old index-based detail URLs (/Project/0). Router matching is
                  case-insensitive, so /Projects and /Experience already resolve. */}
              <Route path="/project/:id" element={<Navigate to="/projects" replace />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
