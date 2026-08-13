import { useState } from "react";
import "./App.css";
import GamertagGenerator from "./components/GamertagGenerator";
import Footer from "./components/shared/Footer/index";
import OfflineStatus from "./components/OfflineStatus";

function App() {
  return (
    <>
      <OfflineStatus />
      <div className="container">
        <h1 className="app-titulo">Gerador de Gamertag 🎮</h1>
        <div className="box">
          <GamertagGenerator />
        </div>
      </div>

      <Footer/>
    </>
  );
}

export default App;
