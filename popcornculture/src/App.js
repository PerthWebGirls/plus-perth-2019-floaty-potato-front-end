import React from "react";
import "./App.css";
import MainPage from "./components/pages/MainPage";
import NavBar from "./components/molecules/NavBar";
import Footer from "./components/organisms/Footer";
import BannerBoard from "./components/organisms/BannerBoard";
function App() {
  return (
    <div className="App">
      <NavBar />
      <BannerBoard />
      <MainPage />
      <Footer />
    </div>
  );
}
export default App;
