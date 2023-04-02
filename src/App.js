import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Navbar from "./component/Navbar/Navbar";
import Homepage from "./page/Homepage/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="video/:videoId" element={<Home />} />
        <Route path="upload" element={<Upload />} /> */}
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
