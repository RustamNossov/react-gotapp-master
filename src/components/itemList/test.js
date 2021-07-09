// // function tellMyPersonality(isEven) {
// //     return isEven%2 === 0 ? 'Fair' : 'Biased'
// // }
// // console.log(tellMyPersonality(4))
// // console.log(tellMyPersonality(3))

// // function countDown(startNumb, endNumb, step) {
// //     for (let i=startNumb; i>=endNumb; i=i-step) {
// //         console.log(i);
// //     }
// // }

// // countDown(100, 0, 4)

// // function reverseDigits(number) {
// //     const numbToString = ''+number
// //     let newString = ''
// //     for (let i=numbToString.length-1; i>=0; --i) {
// //         newString += numbToString[i]
// //     }
// //     return +newString
// // }

// // console.log(reverseDigits(1234))

// function computeGrade(midTermScore, finalScore) {
//     if (finalScore > 50 || midTermScore > 50 || finalScore < 0 || midTermScore < 0 ) {
//         console.log('Mid term score as well as Final score should be out of 50')
//         return
//     }

//     if (typeof midTermScore !== 'number' || typeof finalScore !== 'number' ) {
//         console.log('Mid term score as well as Final score should be a number')
//         return
//     }

//     const avgScore = (midTermScore + finalScore)
//     return avgScore >= 92 ? 'A' : 
//             avgScore >= 85 ? 'B' : 
//             avgScore >= 75 ? 'C' : 'NC'
// }

// console.log(computeGrade(-50,))
// console.log(computeGrade(42,39))


const number = 1234,
    numberToString = (''+number).split('').reverse().join(''),
    arr = numberToString.split('').reverse(),
    newString = arr.join('')

console.log(numberToString)