import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <Router>
      <div>hello</div>
      <Routes>
        <Route path="/" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
