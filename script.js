// 1)
for (i = 1; i <= 7; i++){
    console.log(i);
};

console.log('===========');

// 2)
for (i = 5; i <= 25; i += 4){
    console.log(i);
};

console.log('===========');

// 3)
const wizards = [
    'Harry Potter',
    'Hermione Granger',
    'Ron Weasley'
];
for (list of wizards) {
    console.log(list);
};

console.log('===========');

// 4)
let harryPotterMovies = 0;
while (harryPotterMovies < 9){
    console.log(harryPotterMovies);
    harryPotterMovies++;
};

// 5)
const hogwartsHouses = [
    'Gryffindor',
    'Hufflepuff',
    'Ravenclaw',
    'Slytherin'
];
for (list of hogwartsHouses) {
    for (letters of list) {
        console.log(letters);
    }
};

console.log('===========');

// 6)
const quote = [
    'Yer',
    'A',
    'Wizard',
    'Harry'
];
console.log(...quote);

console.log('===========');

// 7)
for (i=1; i<=25; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log('Expecto Patronum');
    } else if (i % 3 === 0) {
        console.log('Expecto');
    } else if (i % 5 === 0) {
        console.log('Patronum');
    } else {
        console.log(i);
    }
};