//JavaScript to toggle the hamburger menu

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function () {
        console.log('Hamburger button clicked');
        navLinks.classList.toggle('show');
    });
});

//Dictionary API

const handleClick = async () => {
    const inputValue = document.querySelector('.inputValue').value.trim();

    console.log("Input Value: ", inputValue);


    if (!inputValue || inputValue.trim() === "") {
        alert("Please enter any word to Search");
        return;
    }

    const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + inputValue;

    try {

        const response = await fetch(url);

    // Check if the response is ok (status 200-299)
    if (!response.ok) {
        throw new Error("Word not found or invalid request");
    }

    // Parse the response JSON
    const result = await response.json();
        document.querySelector('.bottomcard').style.display = 'block';
        document.querySelector('.value').innerText = inputValue;
        document.querySelector('.partOfSpeech').innerText = result[0].meanings[0].partOfSpeech;
        document.querySelector('.definition').innerText = result[0].meanings[0].definitions[0].definition;

        if (result[0].meanings[0].definitions[0].example) {
            document.querySelector('.exampleLabel').style.display = 'block';
            document.querySelector('.example').style.display = 'block';
            document.querySelector('.example').innerText = result[0].meanings[0].definitions[0].example;

        } 
        
        else {
            document.querySelector('.exampleLabel').style.display = 'none';
            document.querySelector('.example').style.display = 'none';

        }        

    }

    catch (error) {
        console.log(error);
        alert("Please check your Spelling! Try Again!");
        document.querySelector('.bottomcard').style.display = 'none';

    }

    const inputElement = document.querySelector('.inputValue');

    inputElement.addEventListener('input', function() {

        const inputValue = inputElement.value;

        if (/[^a-zA-Z0-9]/.test(inputValue)) {

            alert("Only alphanumeric characters are allowed.");

            inputElement.value = inputValue.replace(/[^a-zA-Z0-9]/g, "");
        }

    });

}

//Fahrenheit to Celsius converter tool

function temperatureConverter(fahrenheit) {
    // Convert Fahrenheit to Celsius
    return (fahrenheit - 32) * 5 / 9;
}

function showResult() {
    // Get the value from the input field
    let fahrenheit = document.getElementById("inputFahrenheit").value;
    
    // Ensure the value is a valid number before converting
    if (fahrenheit !== "" && !isNaN(fahrenheit)) {
       // Convert the temperature to Celsius
       let celsius = temperatureConverter(fahrenheit).toFixed(2); // Round to 2 decimal places
            
       // Display the result in the outputCelsius span
       document.getElementById("outputCelsius").textContent = celsius;
       
       // Show the result card
       document.getElementById("resultCard").style.display = "block";
   } else {
       // Show an alert if the input is invalid
       alert("Please enter a valid number for Fahrenheit.");
   }
}

