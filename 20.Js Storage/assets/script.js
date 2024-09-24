// localStorage.setItem("name", "Ali")
// localStorage.setItem("surname", "nasrll")

// localStorage.clear()


// localStorage.removeItem("surname")

// console.log(localStorage.getItem("surname"));
// console.log(localStorage.length);



// sessionStorage.setItem("name", "ali")
const textContainer = document.querySelector('.textContainer')
const input = document.querySelector('input')
const addBtn = document.querySelector("button")


updateDisplay()

addBtn.addEventListener("click", e => {
    const values = localStorage.getItem('values')
    if (!values) {
        let arr = [input.value]

        localStorage.setItem("values", JSON.stringify(arr))

    } else {
        let valuesArr = JSON.parse(values)
        console.log('values', valuesArr);

        let arr = [...valuesArr, input.value]
        localStorage.setItem("values", JSON.stringify(arr))
    }

    updateDisplay()
})


function updateDisplay() {
    const values = localStorage.getItem('values')
    let valuesArr = JSON.parse(values)
    textContainer.innerHTML = ''
    if (values) {
        valuesArr.forEach(element => {
            textContainer.innerHTML += `
       <p>${element}</p>
    `
        });
    }


}