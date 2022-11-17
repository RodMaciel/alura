import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";


function App() {

  const [squads, setSquads] = useState([])

  const aoNovoSquadAdd = (squad) => {
    console.log(squad)
    setSquads([...squads,squad])

  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoSquadCadastrado={(squad) => aoNovoSquadAdd(squad)} />
      <Time nome="DevOps" />
      <Time nome="Thigo" />
      <Time nome="Data-Sciente" />
      <Time nome="UX e Design" />
    </div>
  );
}

export default App;
