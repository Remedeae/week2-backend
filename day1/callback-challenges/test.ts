export {};

const addTwo = (a : number) => {
    return a + 2;
}

type mapFunction = (a: number) => number;
const map = (array : number[], addTwo : mapFunction) => {
    let filteredArray : number[] = [];
    for (let i = 0; i < array.length;  i++) {
        filteredArray.push(addTwo(array[i]!));
    };
    return filteredArray;
}
//console.log(map([1,2,3,4], addTwo));

/* 
let alphabet = "";
const letters = ["a", "b", "c", "d"];
letters.forEach((char) => {
  alphabet += char;
});
console.log(alphabet);
 */

let alphabet = "";
const letters = ["a", "b", "c", "d"];
type forEachType =  <T>(parameter: T) => void;
const forEach = <T>(inputArray: T[], opperation : forEachType) => {
    for (let i = 0; i < inputArray.length; i++) {
        opperation(inputArray[i]);
    }
};

const updateAlphabet = <T>(char: T) => {
      alphabet += char;
}
forEach(letters, updateAlphabet);
console.log(alphabet);

const mapWith = (array : number[], mapUpdate : mapFunction) => {
    let filteredArray : number[] = [];
    forEach(array, (x) => {filteredArray.push(mapUpdate(x))
    });
}
console.log(mapWith([1, 2, 3], addTwo)); // should output [ 3, 4, 5 ]