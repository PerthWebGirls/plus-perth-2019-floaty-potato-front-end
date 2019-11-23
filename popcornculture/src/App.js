import React from "react";
import "./App.css";
import MainPage from "./components/pages/MainPage";
import NavBar from "./components/molecules/NavBar";
import AppFooter from "./components/molecules/AppFooter";
function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
      <AppFooter />
    </div>
  );
}
export default App;
