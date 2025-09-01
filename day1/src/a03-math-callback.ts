type calculationFunction = (result: number) => void;

const calculation = (a : number, b : number, showResult : calculationFunction) => {
    let result = a + b
    showResult(result)
}
const showResult = (result : number) =>{
    console.log("The sum is", result)
}

calculation(42, 7, showResult); //caluclates result, calls showResult and plugs in the result.