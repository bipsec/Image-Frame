"use strict";
// Adding images to the Flower Grid

const unorderedListImages = document.createElement('ul');

for (let imageName=1; imageName<=30; imageName++) {
    const listElement = document.createElement('li');
    let image = document.createElement("img");
    image.src = `Images/${imageName}.jpg`;
    listElement.id = imageName;
    listElement.appendChild(image);
    unorderedListImages.appendChild(listElement);
}
unorderedListImages.classList.add('gallery')
const element = document.getElementById('container');

element.appendChild(unorderedListImages);


// Adding images to the Bird Grid

const unorderedListBirds = document.createElement('ui');

for (let birdName = 1; birdName <= 30; birdName ++){
    const listElement = document.createElement('li');
    let birdImage = document.createElement('img')
    birdImage.src = `Birds/${birdName}.jpg`;
    listElement.id = birdName;
    listElement.appendChild(birdImage);
    unorderedListBirds.appendChild(listElement);
}

unorderedListBirds.classList.add('gallery');
const element2 = document.getElementById('container2')
element2.appendChild(unorderedListBirds);

