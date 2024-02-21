const cats = [
    {
        name: 'Charlie',
        adoptionStatus: 'available'
    },
    {
        name: 'Lily',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Coco',
        adoptionStatus: 'available'
    },
    {
        name: 'Oreo',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Luna',
        adoptionStatus: 'available'
    },
    {
        name: 'Milo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lola',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Leo',
        adoptionStatus: 'available'
    },
    {
        name: 'Willow',
        adoptionStatus: 'available'
    },
    {
        name: 'Bella',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Max',
        adoptionStatus: 'available'
    },
    {
        name: 'Cleo',
        adoptionStatus: 'available'
    },
    {
        name: 'Lucy',
        adoptionStatus: 'not-available'
    },
    {
        name: 'Daisy',
        adoptionStatus: 'available'
    },
]
let adoptedCats = [];

for (let cat of cats) {
    if (cat.adoptionStatus === 'available') {
        // if available then add to adopted cats array
        adoptedCats.push(cat.name);
    }
}

let outputSentence = 'Heres a list of the cats that are available: ';
for (let i = 0; i < adoptedCats.length; i++) {
    outputSentence += adoptedCats[i]; // builds output sentence
    if (i !== adoptedCats.length - 1) {
        outputSentence += ', '; // puts a comma inbetween each one until the last one
    }
}

console.log(outputSentence);
