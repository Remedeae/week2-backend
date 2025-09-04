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

const fetchSpell = (castSpellOutcome: unknown) => {
   const promise: Promise<void> = fetch(
      "https://www.dnd5eapi.co/api/2014/spells")
      .then((response : Response) => {
         if (!response.ok) {
            throw new Error("Failure retreiveing data.");
         }
         return response.json() as Promise<spellList>;
      })
      .then((data : spellList) => {
         //   console.log(data)
         const spellID: number = Math.floor(Math.random() * data.count) - 1;
         const spell: string = data.results[spellID]!.name;
         console.log(castSpellOutcome + spell);
      })
      .catch((error : unknown) => {
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