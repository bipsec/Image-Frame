"use strict";
// Adding Flowers to the Grid

const flowers = document.getElementById('grid1');

for (let flowerName = 1; flowerName <= 24; flowerName ++){
    let image = document.createElement('img');
    image.id = flowerName
    image.src = `Images/${flowerName}.jpg`;
    const card = document.createElement('div');
    card.classList.add('card')
    card.appendChild(image);
    flowers.appendChild(card);
}

const card = document.createElement('div');
card.textContent = 'Different Types of Flowers';
card.id = 'textBox';
card.classList.add('card');
flowers.appendChild(card);

// Adding Birds to the Grid


const birds = document.getElementById('grid2');

for (let birdName = 1; birdName <= 24; birdName ++){
    let image = document.createElement('img')
    image.src = `Birds/${birdName}.jpg`;
    const card = document.createElement('div');
    card.classList.add('card')
    card.appendChild(image);
    birds.appendChild(card);
}

const card2 = document.createElement('div');
card2.textContent = 'Different types of Birds';
card2.id = 'textBox';
card2.classList.add('card');
birds.appendChild(card2);




// Adding Animation

// const leftswap = document.querySelector('card:nth-child(1)');
// const imageMover = styler(ball);
//
// tween({
//     to: 300,
//     duration: 300,
//     ease: easing.anticipate
// }).start(imageMover.set('x'));
//
// const { anticipate, reversed } = easing;
// const anticipateOut = reversed(anticipate);




