type orderPizzaFunction = (pizzaStatus : string) => void;
const orderPizza = (displayPizzaStatus : orderPizzaFunction) => {
//    console.log("Initiating preparation");
    setTimeout(() => {
        const pizzaStatus = "Your pizza is ready!"
        displayPizzaStatus(pizzaStatus);
    }, 3000)
}
const displayPizzaStatus = (pizzaStatus : string) => {
    console.log(pizzaStatus);
}
orderPizza(displayPizzaStatus);     //sets pizzaStatus, calls displayPizzaStatus and plugs in pizzaStatus, holds 3sec and then prints the result.