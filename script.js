let num1 = 5;
let num2 = 10;

console.log(num1 + num2);

let a = '12';
let numberA = Number(a);

console.log(numberA); 

let randomNum = Math.floor(Math.random() * 100); 
if (randomNum % 2 === 0) {
    console.log(randomNum + " juft son");
} else {
    console.log(randomNum + " toq son");
}

let word = prompt("So'z kiriting:");
if (word === "Mars") {
    console.log(word); 
} else {
    console.log("Mars It school");
}

let words = ['apple', 'orange', 'banana', 'grape', 'melon'];
let longWords = [];

for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
        longWords.push(words[i]);
    }
}

console.log(longWords); 

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i + " juft");
    } else {
        console.log(i + " toq");
    }
}