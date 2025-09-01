type greetingFunction = (message : string) => void;

const greeting = (sayHello : greetingFunction) => {
    const message = "Hello from callback!"
    sayHello(message);
}
const sayHello = (message : string) => { 
    console.log(message);
}

greeting(sayHello); //checks that all types matches up, initiates greeting, calls sayHello while delivering the message variable into it.