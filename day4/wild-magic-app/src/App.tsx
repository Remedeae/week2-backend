import { useState } from "react";
import orc from './assets/orc.svg'
import defeat from './assets/defeat.svg'
import escape from './assets/escape.svg'
import vicotry from './assets/victory.svg'

function App() {

  type spellInfo = {
    index: string,
    name: string,
    level: number,
    url: string,
  }
  type spellList = {
    count: number,
    results: spellInfo[],
  }

  const [combatMessage, setCombatMessage] = useState("After a long battle you are exhausted, yet before you still stands a final towering orc, he's just as tired as you and just wants to go home. As he raises his blade to finish you off you feel a final spark of magic emerging from deep within you.");
  const [chooseSpell, setChooseSpell] = useState("");
  const [image, setImage] = useState(orc);

  const fetchSpellData = async (spellURL: string) => {
    try {
      const response = await fetch(`https://www.dnd5eapi.co${spellURL}`);
      const data = await response.json();
      const spellEffect = data.damage !== undefined ?
        `which deals ${data.damage.damage_type.index} damage to your foe. The orc perisches and you emerge victorious.` :
        "which distracts your foe and you barely manages to escape. You may live another day, but somewhere out there an orc is waiting for his time to strike you down.";
      data.damage !== undefined ? setImage(vicotry) : setImage(escape);
      return spellEffect;

    } catch (error) {
      console.log("Error fetching spell details: ", error)
    }
  }

  const fetchSpell = async () => {

    try {
      const response = await fetch("https://www.dnd5eapi.co/api/2014/spells");
      const data: spellList = await response.json();
      const spellID: number = Math.floor(Math.random() * data.results.length);
      const spell: string = data.results[spellID]!.name;
      const damage = await fetchSpellData(data.results[spellID]!.url);
      return `"${spell}" ${damage}`;

    } catch (error) {
      console.error("Error fetching spell: ", error);
    }
  }
  const rollSpellSuccess = () => {
    return new Promise((resolve, reject) => {
      const outcome: number = Math.random() * 4;
      //console.log(outcome)
      outcome >= 1 ?
        resolve("You cast") :
        reject("Your spell fizzles. The orc laughs manically at you as his blade rips your flesh and life fades from your veins .");
    })
  };
  const castSpell = async () => {
    try {
      const spellSuccess = await rollSpellSuccess();
      const fetchedSpell = await fetchSpell();
      const message: string = `${spellSuccess} ${fetchedSpell}`;
      setCombatMessage(message);
    } catch (error) {

      setCombatMessage(`${error}`);
      setImage(defeat);
    }
  };
  const fetchSpellRequested = async (requestedSpell: string) => {
    try {
      const response = await fetch("https://www.dnd5eapi.co/api/2014/spells");
      const data: spellList = await response.json();
      const spellObject = data.results.filter(item => item.name.toLowerCase() === requestedSpell.toLowerCase());
      const damage = await fetchSpellData(spellObject[0]!.url)
      const spell = spellObject[0]!.name;
      const outcome: string = `${spell} ${damage}`;
      //console.log(`${spell} ${damage}`);
      setCombatMessage(`You cast ${outcome}`);
    } catch (error) {
      setCombatMessage("Hubris! You did not know your spells and now you suffer a grusome death at the hands of this orc.");
      setImage(defeat);
    }
  }

  return (
    <div className="home">
      <div>
        <div className="home__header">
          <i className="fa-solid fa-hand-sparkles"></i>
          <h1>Wild Magic</h1>
          <i className="fa-solid fa-wand-sparkles"></i>
        </div>
        <div className="enemy">
          <img src={image} alt="Orc Enemy" />
        </div>
        <div className="combatLog">
          <p>{combatMessage}</p>
        </div>
        <button className="castSpellButton" onClick={castSpell} >Unleash the magic!</button>
        <label htmlFor="chooseSpell">HA! I'm no random spellcaster, I cast;</label>
        <div>
          <input id="chooseSpell" type="text" placeholder="Enter spell name here" value={chooseSpell} onChange={(e) => setChooseSpell(e.target.value)} />
          <button className="chooseCastButton" onClick={() => fetchSpellRequested(chooseSpell)}>Cast!</button>
        </div>
      </div>
    </div>
  )
}

export default App;
