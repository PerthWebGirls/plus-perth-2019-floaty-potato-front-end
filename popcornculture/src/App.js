import React from "react";
import "./App.css";
import MainPage from "./components/pages/MainPage";
import NavBar from "./components/molecules/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
    </div>
  );
}
export default App;
