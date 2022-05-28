import React from "react";
import PhoneStatus from "./components/molecules/PhoneStatus";
import AppHeader from "./components/molecules/AppHeader";
import MainSection from "./components/organisms/MainSection";
import MenuBar from "./components/organisms/MenuBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PhoneStatus />
      <AppHeader />
      <MainSection />
      <MenuBar />
    </div>
  );
}

export default App;
