
const search = document.querySelector ("#search");
const button = document.querySelector ("button");

function getEarthPicture() {
    const response = fetch('https://api.nasa.gov/EPIC/api/natural?api_key=ZO6CAcQFY8S05YpoxC3eIgz00xfouDwtbyUX4641');
    const picture = response.json();
    console.log(picture)
    document.getElementById("h1").textContent = picture.date
}

getEarthPicture()


