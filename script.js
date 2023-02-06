const search = document.querySelector("#search");
const button = document.querySelector("button");

button.addEventListener("search", function () {
    console.log("klickade")
})
function getPictureOfTheDay() {return ''}

    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then((response) => response.json())
        .then((pictureData) => {
            const copyright = pictureData.copyright;
            const date = pictureData.date;
            const explanation = pictureData.explanation;
            const infoElement = document.createElement("div");
            infoElement.textContent = `The date of picture is ${date}. Explanation: ${explanation}.`;
            document.querySelector("h2").textContent += `${copyright}`;

            const pictureElement = document.getElementById("picture");
            pictureElement.appendChild(infoElement);
        })

        // .catch((err) => {
        //     console.error(err.message);
        // });

// }


