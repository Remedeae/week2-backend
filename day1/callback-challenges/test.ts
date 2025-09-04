export { };

const addTwo = (a: number) => {
    return a + 2;
}

type mapFunction = (a: number) => number;
const map = (array: number[], addTwo: mapFunction) => {
    let filteredArray: number[] = [];
    for (let i = 0; i < array.length; i++) {
        filteredArray.push(addTwo(array[i]!));
    };
    return filteredArray;
}
//console.log(map([1,2,3,4], addTwo));

type callbackType = (char: any) => void;
const forEach = (array: any[], callback: callbackType) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

let alphabet = "";
const letters = ["a", "b", "c", "d"];
forEach(letters, function (char) {
    alphabet += char;
});
//console.log(alphabet);

const mapWith = (array: number[], mapUpdate: mapFunction) => {
    let filteredArray: number[] = [];
    forEach(array, (item) => {
        filteredArray.push(mapUpdate(item))
    });
    return filteredArray;
}
//console.log(mapWith([1, 2, 3], addTwo)); // should output [ 3, 4, 5 ]

type addFunction = (a: number, b: number) => number;
const reduce = (array: number[], callback: addFunction, value: number) => {
    for (let i = 0; i < array.length; i++) {
        value = callback(value, array[i]!);
    }
    return value;
}

const nums = [4, 1, 3];
const add = function (a: number, b: number) {
    return a + b;
};
console.log(reduce(nums, add, 0))

//should output 8

// Challenge 7
/* Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!
 */
const intersection = (arrays:number[][]) => {

}
console.log(
    intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
);
// should log: [5, 15]