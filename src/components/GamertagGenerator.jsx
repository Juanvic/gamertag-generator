import { useEffect, useState } from "react";
import { prefixos, sufixos } from "../constants";

const GamertagGenerator = () => {
  const [gamertag, setGamertag] = useState("Clique para gerar");

  const generateGamertag = () => {
    const pfx = prefixos[Math.floor(Math.random() * prefixos.length)];
    const sfx = sufixos[Math.floor(Math.random() * sufixos.length)];
    const num = Math.floor(Math.random() * 900) + 100; // Número de 3 dígitos

    setGamertag(`${pfx}_${sfx}${num}`);
  };

  // Gera uma gamertag ao abrir a página
  useEffect(() => {
    generateGamertag();
  }, []);

  return (
    <>
      <h1>{gamertag}</h1>
      
      <button id="btn-gerar" onClick={generateGamertag}>
        Gerar Gamertag
      </button>

    </>
  );
};

export default GamertagGenerator;