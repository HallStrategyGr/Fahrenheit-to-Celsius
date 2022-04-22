let fahrenheit = 80;
let celsius; 

function convertFahrenheitToCelsius(fahrenheit, celsius) {
    return (fahrenheit -32) * 0.5556;
}
console.log(convertFahrenheitToCelsius(fahrenheit, celsius).toFixed(2));

