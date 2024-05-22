import { useContext } from "react";
import Boton from "./Boton";
import { PlanContext } from "./PlanContext";

const Card = ({ tipo, costo }) => {

  const { anual } = useContext(PlanContext);

  return (
    <div className={`card_container ${tipo.mode}`} >
      <p>{tipo.mode}</p>
      <h1 className="price"><span className="dolita">$</span>{anual == true ? costo.year : costo.month}</h1>
      <hr />
      <p>{tipo.storage} Storage</p>
      <hr />
      <p>{tipo.users} Users Allowed</p>
      <hr />
      <p>Send up to {tipo.send} GB</p>
      <hr />
      <Boton tipa={tipo.mode} />
    </div>
  )
}

export default Card