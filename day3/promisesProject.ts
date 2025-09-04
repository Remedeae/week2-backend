const fetchSpell = (castSpellOutcome: unknown) => {
   fetch("https://www.dnd5eapi.co/api/2014/spells")
      .then((response) => {
         if (!response.ok) {
            throw new Error("Failure retreiveing data.");
         }
         return response.json();
      })
      .then((data) => {
         const spellID: number = Math.floor(Math.random() * data.count) - 1;
         const spell: string = data.results[spellID].name;
         console.log(castSpellOutcome + spell);
      })
      .catch((error) => {
         console.error("Error fetching spell: ", error);
      })
}
const castSpell = new Promise((resolve, reject) => {

   let outcome: number = Math.random();

   outcome > 0.5 ?
      resolve("You cast ") :
      reject("Your spell fizzels.");
});
castSpell
   .then((message) => {
      fetchSpell(message);
   })
   .catch((error) => {
      console.log(error)
   });

//orc sprites https://free-game-assets.itch.io/free-top-down-orc-game-character-pixel-art
//DnD 5e API: https://www.dnd5eapi.co/api/2014/