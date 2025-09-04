type handleOutcomeFunction = (display : number) => void ;
const handleOutcome = (displayOutcome : handleOutcomeFunction) => {
    let outcome = Math.floor(Math.random()*2);
//    console.log(outcome);
    displayOutcome(outcome);
}
const displayOutcome = (outcome:number) => {
    outcome === 0 ? console.log("Fail") : console.log("Sucess!")
}

handleOutcome(displayOutcome);  //outcome is calculated from a function taht gives either 0 or 1, outcome is plugged into displayOutcome which checkes if the value is 0, which yield a "fail"
                                //message, otherwise a "success" is displayed
 
