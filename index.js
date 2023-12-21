function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#generator-result", {
        strings: ["Hello World"],
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

let poemFormElement = document.querySelector("#generator-form");
poemFormElement.addEventListener("submit", generatePoem);