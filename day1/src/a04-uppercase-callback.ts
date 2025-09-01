type toUpperCaseFuntion = (string: string) => void;

const stringToUpperCase = (input : string, shiftUpperCase : toUpperCaseFuntion) => {
    const string = input;
    shiftUpperCase(string);
}
const shiftUpperCase = (string : string) => {
    console.log(string.toUpperCase());
}

stringToUpperCase("cats are cute!", shiftUpperCase); //puts in input and assign it to string, calls shiftSupperCase and plugs in teh string, shiftSupperCase consoles it modified by teh .toUpperCase opperation.