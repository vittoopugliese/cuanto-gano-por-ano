import { useState } from "react";

function App() {
  const [time, setTime] = useState('y')
  const [plata , setPlata] = useState(0)
  const [res , setRes] = useState(0)

  function getPlata(){
    let platita

    platita = plata / time

    return platita
  }

  return (
    <div className="container">
      <input type="number" placeholder="Tu sueldo ANUAL" onChange={(e) => setPlata(e.target.value)} />
      <p>queres saber cuanto ganas por:</p>
      <select value={time} onChange={(e) => setTime(e.target.value)}>
        <option value="1">Ano</option>
        <option value="12">Mes</option>
        <option value="365">Dia</option>
        <option value="8760">Hora</option>
        <option value="525600">Minuto</option>
        <option value="31536000">Segundo</option>
        <option value="31536000000">(extremo) MILI-Segundo</option>
      </select>
      <h1>{getPlata()}</h1>
    </div>
  );
}

export default App;
