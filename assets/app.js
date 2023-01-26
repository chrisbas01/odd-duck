'use strict';

const canvasEl = document.getElementById('chart');
const buttonEl = document.getElementById('result-button');
const petImageEl = document.getElementById('pet-images');
const pet = ['assets/dog1.jpg', 'dog2.jpg', 'dog3.jpg', 'dog4.png', 'dog5.jpg', 'cat1.jpg', 'cat2.jpg', 'cat3.jpg', 'cat4.jpg', 'bird1.jpg', 'bird2.jpg', 'bird3.jpg', 'bird4.jpg'];

const allGoatImages = [];
let rounds = 5;
let chart = null;

function PetImage(name, url) {
  this.name = name;
  this.url = `images/${url}`;
  this.clicks = 0;
  this.timesSeen = 0;
}

function getRandomPet() {
  // return an index of a goatImage in allGoatImages
  return Math.floor(Math.random() * allPetImages.length);
}

// render images onto our HTML
function render() {
  let img1El = document.getElementById('img1');
  let img2El = document.getElementById('img2');
  let img3El = document.getElementById('img3');
  let first = getRandomPet();
  let second = getRandomPet();
  let third = getRandomPet();

  while (second === first,third) {
    second = getRandomPet();
  }

  console.log(first, second);
  let dog1 = allPetImages[first];
  let dog2 = allPetImages[second];

  console.log(img1El, img2El);
  img1El.src = dog1.url;
  img2El.src = dog2.url;
  img1El.name = dog1.name;
  img2El.name = dog2.name;
  dog1.timesSeen++;
  dog2.timesSeen++;
}

// add 1 to that goats click count.
function handleClick(event) {
  console.log(event.target);
  // determine which goat was clicked.
  let petName = event.target.name;

  // forEach method on an array, 
  allGoatImages.forEach(function (pet) {
    if (pet.name === petName) {
      pet.clicks++;
    }
  });
  rounds--;
  if (!rounds) {
    petImageEl.removeEventListener('click', handleClick);
    // show me the button!
    buttonEl.style.display = 'inline';
  }
  console.log(allPetImages);
  render();
}

// does our event matter??
function handleResults(event) {

  let clickData = [];
  let viewData = [];
  let nameValues = [];

  // find the data for our chart.
  for (let i =0; i < allPetImages.length; i++) {
    nameValues.push(allPetImages[i].name);
    clickData.push(allPetImages[i].clicks);
    viewData.push(allPetImages[i].timesSeen);
  }

  // draw our chart
  chart = new Chart(canvasEl, {
    type: 'bar',
    data: {
      labels: nameValues,
      datasets: [{
        label: '# of Votes',
        data: clickData,
        borderWidth: 1
      }, {
        label: '# of Views',
        data: viewData,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function updateChart(dataSetName, data) {
  if (chart) {
    // what can we do to update an already rendered chart.
  }
}

for (let i = 0; i < goats.length; i++) {
  let goatImage = new GoatImage(pet[i].slice(0, pet[i].length - 13), pet[i]);
  allPetImages.push(petImage);
}

console.log(allPetImages);
render();

petImageEl.addEventListener('click', handleClick);
buttonEl.addEventListener('click', handleResults);