
// Connecting HTML elements to Javascript
const urlNasa = "https://images-api.nasa.gov/search?q=";
const retrieve = document.querySelector("#retrieve");
const button = document.querySelector("button");
const container = document.querySelector("#container")
const yearStart = document.querySelector("#yearStart")
const yearEnd = document.querySelector("#yearEnd")
// Each time the button is clicked by the user
// the word typed in the search input box becomes the value of the searching.
// If the word is shorter than 2 letters, the functions returns. 
button.addEventListener("click", function () {
    let word = retrieve.value;
    if (word.length < 2) {
        return;
    }

    // The method fetch is applied for retrieving data from the API (Nasa image and video library).
    // the year values, the the word types by the user are added to the original nasa URL in order to get specific requested data.
    // Information is being transerfered in json format.
    fetch(urlNasa + word + "&year_start=" + yearStart.value + "&year_end=" + yearEnd.value)
        .then((response) => response.json())
        .then((data) => {

            // Every time the user needs to search with a new word, the old data is being emptied from the webpage.
            document.getElementById("container").innerHTML = "";

            //  In case it is an array, for loop is created for each item in the database. 
            // Only few properties are chosen for each item data to be posted on the webpage. 
            // The final javascript data is being sent to html document. 
            let searchItems = data.collection.items;
            searchItems.forEach(item => {
                if (Array.isArray(item.links) && Array.isArray(item.data)) {
                    let image = item.links[0].href;
                    let description = item.data[0].description;
                    document.getElementById("container").innerHTML += `<img src = "${image}" class = "imageClass">  <p>${description}</p> `;
                }

                // if (item.data[0].media_type === 'image') {

                //     const mediaType = item.data[0].media_type
                // }
            })
        });
});

let url
// url= "https://images-api.nasa.gov/search?q=apollo&year_start= &year_end=19702023"
url = "data.json";
