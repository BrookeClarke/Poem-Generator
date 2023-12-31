function displayPoem(response) {

    new Typewriter("#generator-result", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "0f605ca33b8d413fa995ab3t060267od";
    let apiContext = "You are a poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML. Make sure to follow the user instructions below. Please sign the poem with '- SheCodes AI' inside a <strong> element at the END of the poem and NOT at the beginning";
    let apiPrompt = `User instructions are: Generate a poem about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${apiPrompt}&context=${apiContext}&key=${apiKey}`;

    let poemElement = document.querySelector("#generator-result");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating"> Generating a poem about ${instructionsInput.value}</div>`

    axios.get(apiUrl).then(displayPoem)
}

let poemFormElement = document.querySelector("#generator-form");
poemFormElement.addEventListener("submit", generatePoem);