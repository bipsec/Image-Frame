// Adding Flowers to the Grid

const flowers = document.getElementById('grid1');

for (let flowerName = 1; flowerName <= 24; flowerName++) {
    let image = document.createElement('img');
    image.id = `flower-${flowerName}`
    image.src = `Images/${flowerName}.jpg`;
    const card = document.createElement('div');
    card.classList.add('card')
    card.appendChild(image);
    flowers.appendChild(card);
}

const card = document.createElement('div');
card.textContent = 'Different Types of Flowers';
card.id = 'flower-textBox';
card.classList.add('card');
flowers.appendChild(card);


const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// Animation playing Field for Flowers

const addAnimationClassToCard = (type, card1ID, card2ID) => {
    const card1 = document.getElementById(`${type}-${card1ID}`);
    const card2 = document.getElementById(`${type}-${card2ID}`);
    card1.id = `${type}-${card2ID}`;
    card2.id = `${type}-${card1ID}`;
    let temp1 = card1.parentNode;
    let temp2 = card2.parentNode;
    temp1.replaceChildren(card2)
    temp2.replaceChildren(card1)
}

let animIntervalForFlower;
let isPlayOn = false;

const startAnimation = () => {
    if (isPlayOn) stopAnimation();
    isPlayOn = true;
    animIntervalForFlower = setInterval(() => {
        const randomNumber = getRandomIntInclusive(1, 24);
        addAnimationClassToCard('flower', randomNumber, randomNumber + 1)
    }, 1000);
}

const stopAnimation = () => {
    isPlayOn = false;
    clearInterval(animIntervalForFlower);
}


// Play and Pause for Flowers

const playButtonForFlowers = document.getElementById('flower-btn-play');
playButtonForFlowers.onclick = startAnimation;

const pauseButtonForFlowers = document.getElementById('flower-btn-pause');
pauseButtonForFlowers.onclick = stopAnimation;


// Adding Birds to the Grid

const birds = document.getElementById('grid2');

for (let birdName = 1; birdName <= 24; birdName++) {
    let image = document.createElement('img')
    image.id = `bird-${birdName}`;
    image.src = `Birds/${birdName}.jpg`;
    const card = document.createElement('div');
    card.classList.add('card')
    card.appendChild(image);
    birds.appendChild(card);
}

const card2 = document.createElement('div');
card2.textContent = 'Different types of Birds';
card2.id = 'bird-textBox';
card2.classList.add('card');
birds.appendChild(card2);


// Animation playing Field for Birds

let animIntervalForBirds;
let isPlayOnForBirds = false;

const startAnimationForBirds = () => {
    if (isPlayOnForBirds) stopAnimationForBirds();
    isPlayOnForBirds = true;
    animIntervalForBirds = setInterval(() => {
        const randomNumber = getRandomIntInclusive(1, 24);
        addAnimationClassToCard('bird', randomNumber, randomNumber + 1);
    }, 1000);
}

const stopAnimationForBirds = () => {
    isPlayOnForBirds = false;
    clearInterval(animIntervalForBirds);
}


// Play and Pause For Birds

const playButtonForBirds = document.getElementById('bird-btn-play');
playButtonForBirds.onclick = startAnimationForBirds;

const pauseButtonForBirds = document.getElementById('bird-btn-pause');
pauseButtonForBirds.onclick = stopAnimationForBirds;
