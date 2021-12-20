import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TestPage />} />
        <Route path="/test-webview/result" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
