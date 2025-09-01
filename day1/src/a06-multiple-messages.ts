type handleMessageFunction =  (message: string) => void;

const handleMessage = (input : string, displayMessage : handleMessageFunction) => {
    const message = input;
    displayMessage(message);
}
const displayMessage = (message : string) => {
    console.log(message);
}

handleMessage("Who's a good boy?", displayMessage);         //takes the input and sets message to this value, calls up displayMessage and puts in message that is then printed. 
handleMessage("Who's a good boy???", displayMessage);       //Repeats for the secound two calls of handleMessage.
handleMessage("You are, yes you are!", displayMessage);