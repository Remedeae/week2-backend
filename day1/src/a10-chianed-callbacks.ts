type step2Function = (message3: string) => void;
type step1Function = (message2: string, step3: step2Function) => void;

const step1 = (step2: step1Function) => {
    console.log("Step 1 done.");
    setTimeout(() => {
        const message2 = "Step 2 done";
        step2(message2, step3);
    }, 1000)
}
const step2 = (message2: string, step3: step2Function) => {
    console.log(message2)
    setTimeout(() => {
        const message3 = "Step 3 done.";
        step3(message3);
    }, 1000)
}
const step3 = (message3: string) => {
    console.log(message3);
}

step1(step2);   //Step 1 isa printed, message 2 set and plugged in as step2 is called up. step2 holds 1 sec and prints message 2, then sets message3 and calls step3 to plug in message 3.
                //message3 holds 1sec and then prints message3.