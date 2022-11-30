document.body.style.backgroundColor = "black"
document.body.style.color = "white"
document.body.style.textAlign = "center"
const img = "https://media.tenor.com/ogsH7Ailje8AAAAd/cat-funny-cat.gif"
const imgElement = document.createElement("img")
document.body.append(imgElement)
imgElement.src = img
// NO ERRORS ABOVE!!!!!!!!!!!!! //
// -----------------------//
// If JS is linked properly to HTML, page should load up 
// with white color and centered text, black background
// If CSS is linked properly, the cat image should be a perfect 
// square with a dotted red border
// --------------------  //
// similar errors below, in total: 4 similar errors //
const placeObj = [
    {
      country: USA,
      state: "New York",
      city: "NYC",
      population: 8468000
    },
    {
      country: USA,
      state: "Florida",
      city: "Miami",
      population: 439890
    },
    {
      country: China,
      city: "ShangHai",
      population: 26320000
    },
    {
      country: Japan,
      city: "Tokyo",
      population: 13960000
    }
]
// ----------------------//
// -------------------//
// Two errors //
function printObj(){
    placeobj.forEach(place => {
        console.log(place)
    })
    
// ----------------------------//
printObj()
// ---------------------------//
printCountry() => {
    placeObj.forEach(place => {
        console.log("Country: ", place.country)
    })
}
// one error above writing the arrow function
// Something missing here
// --------------------------- //
// ------------------------------//
// one error below
function printCityAndState(){
    placeObj.forEach(place) => {
        if (typeof(place.state) === "undefined"){
            console.log("State: N/A", "City: ", place.city)
        }
        else
        console.log("State: ",place.state, "City: ", place.city)
    })
}
// ------------------------------//
printCityAndState()