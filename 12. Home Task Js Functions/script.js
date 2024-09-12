
// const findDivideSeven = (number) => {
//     if (number % 7 === 0) {
//         alert(`eded 7e bolunendir`)
//     } else {
//         let remainder = number % 7
//         if (7 - remainder <= 3) {
//             alert(+number + (7 - remainder))
//         } else {
//             alert(number - remainder)
//         }
//     }
// }



// const number = prompt("Eded Daxil edin")

// findDivideSeven(number)



let number = prompt("eded daxil edin")

task(number)

function task(number) {

    if (number < 50) {
        let count = 0
        for (let i = 3; i < number; i++) {

            if (i % 3 == 0) {
                console.log(i);

                count++
            }
        }
        console.log(count);

    }
    else if (number < 100) {

    }
}