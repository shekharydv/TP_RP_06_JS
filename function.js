// function learn

function greetings(name) {
    console.log("Hello, " + name);

    greetings("Shekhar")
}


// Area of rectangle function

function areaOfRectangle(h, w) {
    var area = h * w; 
    return area; 
}
console.log(areaOfRectangle(24, 24)); 

// Function to convert Celsius to Fahrenheit

function celciusToFahrenheit(celcTemp) {
    var fahrenheitTemp = (celcTemp * 9/5) + 32;
    
    console.log(`${celcTemp}°C = ${fahrenheitTemp}°F`);
}

celciusToFahrenheit(25);


//Temperature converter fahrenheit to celcius 

function fahrenheitToCelcius (fahrenheitTemp){
    var celciusTemperature = (fahrenheitTemp - 32) * 5/9 ;
    console.log(`${fahrenheitTemp}°F  = ${celciusTemperature}°C`);
}
fahrenheitToCelcius(77)