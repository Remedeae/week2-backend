type calculatorFunction = (result: number) => void;
type Opperator = "+" | "-" | "/" | "*";

const calculator = (a: number, b: number, opperator: Opperator, displayResult: calculatorFunction) => {
    let result = 0;
    const executeOpperation = () => {
        if (opperator === "+") {
            return result = a + b;
        }
        if (opperator === "-") {
            return result = a - b;
        }
        if (opperator === "/") {
            return result = a / b;
        }
        if (opperator === "*") {
            return result = a * b;
        }
    };
    executeOpperation();
    displayResult(result);
}

const displayResult = (result: number ) => {
    console.log(result);
}
    
calculator(4,2,"*", displayResult); //result is set to 0, executeOpperation is run to update result depending on recived parameters. displayResult logs the restule plugged in from the calulator function.