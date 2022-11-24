import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time/index.js"


function App() {

  const times = [
    {
      nome: "Entry-Fragger",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      nome: "Lurker",
      corPrimaria: "82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Trader",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "IGL",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      nome: "Support",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      nome: "Baiter",
      corPrimaria: "#FFBA06",
      corSecundaria: "#FFF5D9",
    },
    {
      nome: "Flex",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    }
  ];

  const [squads, setSquads] = useState([]) 

  const aoNovoSquadAdd = (squad) => {
    debugger
    setSquads([...squads,squad])

  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        aoSquadCadastrado={(squad) => aoNovoSquadAdd(squad)}
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={squads.filter(colaborador => colaborador.time === time.nome)}
        />
      ))}
      <Rodape/>
    </div>
  );
}

export default App;
