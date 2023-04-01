import "./App.scss";
import Navbar from "./component/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="video/:videoId" element={<Home />} />
        <Route path="upload" element={<Upload />} /> */}
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
