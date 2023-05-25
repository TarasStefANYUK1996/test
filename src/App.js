import { Navigate, Customers } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigate />
        <Routes>
          <Route path="/customers" element={<Customers />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
