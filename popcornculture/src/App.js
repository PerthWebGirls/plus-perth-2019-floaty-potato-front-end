import React from "react";
import "./App.css";
import MainPage from "./components/pages/MainPage";
import NavBar from "./components/molecules/NavBar";
import AppFooter from "./components/molecules/AppFooter";
import BannerBoard from "./components/organisms/BannerBoard";
function App() {
  return (
    <div className="App">
      <NavBar />
      <BannerBoard />
      <MainPage />
      <AppFooter />
    </div>
  );
}
export default App;
