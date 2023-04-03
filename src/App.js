import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Navbar from "./component/Navbar/Navbar";
import HomePage from "./page/HomePage/HomePage";
import SignupPage from "./page/SignupPage/SignupPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="video/:videoId" element={<Home />} /> */}
        <Route path="signup" element={<SignupPage />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
