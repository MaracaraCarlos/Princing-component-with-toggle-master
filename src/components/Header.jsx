import { useContext } from "react";
import { PlanContext } from "./PlanContext";


const Header = () => {

  const { setAnual } = useContext(PlanContext);

  return (
    <div className="header">
      <h2>Our Pricing</h2>
      <div className="header_child">
        <p>Annually</p>
        <div className="btn-container">
          <input 
            id="btn-switch" 
            type="checkbox"
            onChange={() => {
              setAnual((prev) => !prev)
            }} 
          />
          <label htmlFor="btn-switch" className="lbl-switch"></label>
        </div>
        <p>Monthly</p>
      </div>
    </div>
  )
}

export default Header