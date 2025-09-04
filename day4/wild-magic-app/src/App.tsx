

function App() {

let combatMesage : string = "PANICC!"

  return (
    <div className="home">
      <div>
        <div className="home__header">
          <i className="fa-solid fa-hand-sparkles"></i>
          <h1>Wild Magic</h1>
          <i className="fa-solid fa-wand-sparkles"></i>
        </div>
        <div className="enemy">

        </div>
        <div className="combatLog">
          <p>{combatMesage}</p>
        </div>
        <button className="castSpellButton" /* onClick={castSpell} */>Unleash the magic!</button>
      </div>
    </div>
  )
}

export default App;
