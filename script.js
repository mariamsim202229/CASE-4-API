
// const search = document.querySelector ("#search");
// const button = document.querySelector ("button");

// function getEarthPicture() {
//     const response = fetch('https://api.nasa.gov/EPIC/api/natural?api_key=ZO6CAcQFY8S05YpoxC3eIgz00xfouDwtbyUX4641');
//     const picture = response.json();
//     console.log(picture)
//     document.getElementById("h1").textContent = picture.date
// }

// getEarthPicture()

fetch("https:api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then((response) => response.json())
    .then((pictureData) => {
        const copyright = pictureData.copyright;
        const date = pictureData.date;
        const explanation = pictureData.explanation;

        const infoElement = document.createElement("div");
        infoElement.textContent = `The date of picture is ${date} and explanation is ${explanation}.`;

        document.querySelector("h2").textContent += `${copyright}`;

        const pictureElement = document.getElementById("picture");
        pictureElement.appendChild(infoElement);
    })

// .catch ((err) => {
//     console.error (err.message);
// });




