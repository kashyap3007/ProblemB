import Home from "./home";
// import ReactDOM from "react-dom/client";
import { Routes, Route, useLocation } from "react-router-dom";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
