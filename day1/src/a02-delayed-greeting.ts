type sayHelloLaterFunction = (message : string) => void;

const sayHelloLater = (greeting : sayHelloLaterFunction) => {
    //console.log("Hello?")
    setTimeout(() => {
    const message = "Hi, I'm late!"
    greeting(message);
    }, 2000);
}
const greet = (message : string) => {
    console.log(message);
}

sayHelloLater(greet);   //initiates sayHello, calls greet and plugs in message, holds 2sec and then prints message.