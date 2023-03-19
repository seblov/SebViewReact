import { Routes, Route } from "react-router-dom";
import Status from "./components/Status";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Status />} />
        {/* <Route path="/about" element={<AboutUs/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
