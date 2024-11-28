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

