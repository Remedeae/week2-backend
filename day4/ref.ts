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

const fetchSpellData = async (spellURL: string) => {
   try {
      const response = await fetch(`https://www.dnd5eapi.co${spellURL}`);
      const data = await response.json();
      const spellEffect = data.damage !== undefined ?
         `which deals ${data.damage.damage_type.index} damage to your foe. The orc perisches and you emerge victorious.` :
         "which distracts your foe and you barely manages to escape. You may live another day, but somewhere out there an orc is waiting for his time to strike you down.";
      return spellEffect;

   } catch (error) {
      console.log("Error fetching spell details: ", error)
   }
}

const fetchSpell = async () => {

   try {
      const response = await fetch("https://www.dnd5eapi.co/api/2014/spells");
      const data: spellList = await response.json();
      const spellID: number = Math.floor(Math.random() * data.count) - 1;
      const spell: string = data.results[spellID]!.name;
      const damage = await fetchSpellData(data.results[spellID]!.url);
      return `${spell} ${damage}`;

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
         reject("Your spell fizzels.");
   })
};
const castSpell = async () => {
   try {
      const spellSuccess = await rollSpellSuccess();
      const fetchedSpell = await fetchSpell();
      const message: string = `${spellSuccess} ${fetchedSpell}`;
      console.log(message);
   } catch (error) {
      console.log(error)
   }
}
//fetchSpell();
//castSpell()

const fetchSpellRequested = async (requestedSpell: string) => {
   try {
      const response = await fetch("https://www.dnd5eapi.co/api/2014/spells");
      const data: spellList = await response.json();
      const spellObject = data.results.filter(item => item.name.toLowerCase() === requestedSpell.toLowerCase());
      const damage = await fetchSpellData(spellObject[0]!.url)
      const spell = spellObject[0]!.name;
      console.log(`${spell} ${damage}`);
      return `${spell} ${damage}`;


   } catch (error) {
      console.error("Error fetching spell: ", error);
   }
}

fetchSpellRequested("light");








//orc sprites https://free-game-assets.itch.io/free-top-down-orc-game-character-pixel-art
//DnD 5e API: https://www.dnd5eapi.co/api/2014/