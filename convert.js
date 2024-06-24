/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertButton = document.getElementById("convert-btn")
const userInput = document.getElementById("input-el")
const themeButton = document.getElementById("toggle")
let theme = "light"

const length = {
  imperial: 'feet',
  metric: 'meters',
  ratio: 3.281,
  element: document.getElementById("length-math")
}

const volume = {
  imperial: 'gallons',
  metric: 'liters',
  ratio: 0.264,
  element: document.getElementById("volume-math")}


const mass = {
  imperial: 'pounds',
  metric: 'kilos',
  ratio: 2.204,
  element: document.getElementById("mass-math")}


convertButton.addEventListener("click", function () {
  changeMeasurements(length)
  changeMeasurements(volume)
  changeMeasurements(mass)
})


function changeMeasurements (measurement) {
  measurement.element.innerText = 
  `${userInput.value} meters = ${(userInput.value * measurement.ratio).toFixed(3)} ${measurement.imperial}` 
  + ` | ${userInput.value} feet = ${(userInput.value/measurement.ratio).toFixed(3)} ${measurement.metric}`
}
