
const Boton = ({ tipa }) => {
  return (
    <div className="btn-learn-container">
      <button 
        className={tipa === "Professional" ? "btn-learn white" : "btn-learn morado"}>
          Learn More
      </button>
    </div>
  )
}

export default Boton