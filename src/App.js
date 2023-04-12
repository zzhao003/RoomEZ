import "./App.scss";
import { Route, Routes } from "react-router-dom";

import Navbar from "./component/Navbar/Navbar";
import HomePage from "./page/HomePage/HomePage";
import SignupPage from "./page/SignupPage/SignupPage";
import LoginPage from "./page/LoginPage/LoginPage";
import ProfilePage from "./page/ProfilePage/ProfilePage";
import LikedPage from "./page/LikedPage/LikedPage";
import ChatPage from "./page/ChatPage/ChatPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="liked" element={<LikedPage />} />
      </Routes>
      <Navbar />
    </>
  );
}

export default App;
