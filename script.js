'use strict'

// let massMark = 95;
// let hightMark = 1.88;
// let markBMI = massMark / hightMark ** 2;
// console.log(markBMI);

// let massJhon = 85;
// let hightJhon = 1.76;

// let jhonBMI = massJhon / (hightJhon*hightJhon);
// console.log(jhonBMI);

// let markHigherBMI = markBMI > jhonBMI;
// console.log(markHigherBMI)

// if(markBMI > jhonBMI){
//     console.log(`Mark's BMI ${markBMI} is higher than John's ${jhonBMI})`)
// } else {
//     console.log(`Jhon's BMI ${jhonBMI} is higher than Mark's ${markBMI})`)
// }

const scoreDolph1 = 97;
const scoreDolph2 = 112;
const scoreDolph3 = 101;
const averageScoreDolphins = (scoreDolph1 + scoreDolph2 + scoreDolph3) / 3;
console.log(averageScoreDolphins);

const ScoreKoalasOne = 109;
const ScoreKoalasTwo = 95;
const ScoreKoalasThree = 106;
const avKoalasScore = (ScoreKoalasOne + ScoreKoalasTwo + ScoreKoalasThree) / 3 ;
console.log(avKoalasScore);

if (averageScoreDolphins > 100) {
    console.log(`The Dolphin's scores is higher than Koala and The Dolphin's score is ${averageScoreDolphins}`)
} else if (averageScoreDolphins === avKoalasScore){
    console.log(`Draw,Dolphin's score ${averageScoreDolphins} and Koala's score ${avKoalasScore}`);
} else {
    console.log(`The Koala's scores is higher than Dolphins and The Koalas's score is ${avKoalasScore}`);
}