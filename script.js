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

// 


// const amirAli = console.log('AmirAli');

// amirAli;
// amirAli;


// function callName(name) {
//     return `Salam ${name}`;
// }


// const firstName = callName('Amir Ali');
// console.log(firstName);

// console.log(typeof console.log);

// console.log(typeof console.info);


// function cutPieces(fruit){
//     return fruit * 4;
// }



// function friutProccesor(apples,oranges){

//     const cutApples = cutPieces(apples);
//     const cutOranges = cutPieces(oranges);

//     const juice = `Juice with ${cutApples} and ${cutOranges}`;
//     return juice;

// }
// console.log(friutProccesor(2, 3));


// const calcAge = function(birthYear){
//     return 2037 - birthYear;
// }

// const yearUntilRetirement = function (birthyear ,firstName)  {
//     const age = calcAge(birthyear)
//     const retirement = 65 - calcAge(birthyear);

//     if(retirement > 0){
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     }else{
//         console.log(`${firstName} has already retired`);
//         return 'Horray';
//     }
   
// }
// console.log(yearUntilRetirement(1991, 'john'));
// console.log(yearUntilRetirement(1970, 'mike'));



const calcAvg = (scoreOne , scoreTwo ,scoreThree)=>{
  let  scores = scoreOne + scoreTwo + scoreThree;
    return scores / 3;
}


const checkwin = function(avgDolphin , avgKoala){
    const dolphinScore = calceAvg(avgDolphin,avgDolphin,avgDolphin)
    const koalaScore = calceAvg(avgKoala,avgKoala,avgKoala)

    if(dolphinScore>100 && dolphinScore>koalaScore){
        console.log(`Dolphins win (${dolphinScore} vs )`)
    }


}
