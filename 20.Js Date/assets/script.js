// // const date = new Date("1998-11-25").getHours();

// const date = new Date(1998, 11, 35, 12, 30, 30).toISOString()
// // const date = new Date(170131278632123)

// console.log(date);


let startTime

const timeSpend = {
    Red: 0,
    Blue: 0,
    Green: 0
}

const boxes = document.querySelectorAll('.box')
const timeContainer = document.querySelector('.timeContainer')

boxes.forEach(box => {

    box.addEventListener("mouseenter", e => {
        startTime = new Date().getTime()
    })

    box.addEventListener("mouseleave", event => {
        let curentBox = event.target.getAttribute('data-color')
        // console.log(curentBox);
        let endTime = new Date().getTime()
        let timeSpendSecond = ((endTime - startTime) / 1000)
        timeSpend[curentBox] = timeSpendSecond

        updateDisplay()

    })

})


function updateDisplay() {
    timeContainer.innerHTML = `
    <p> Qırmızı qutuda ${timeSpend.Red.toFixed(2)} saniye kecirildi</p>
    <p> Mavi qutuda ${timeSpend.Blue.toFixed(2)} saniye kecirildi</p>
    <p> Yasil qutuda ${timeSpend.Green.toFixed(2)} saniye kecirildi</p>
    `
}
