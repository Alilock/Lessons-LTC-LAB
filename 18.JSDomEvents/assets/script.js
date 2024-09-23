const grandParent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')
const example = document.getElementById("example")



// window.addEventListener("load", (e) => {
//     alert("Page Loaded")
// })


// window.addEventListener("resize", e => {
//     console.log("Window Resized");
//     console.log('width:', window.outerWidth);
//     console.log('height:', window.innerHeight);
// })

// const img = document.querySelector("img")

// img.addEventListener("load", e => {
//     example.innerHTML = ''
// })
// img.addEventListener("error", e => {
//     example.innerHTML = "Image Not Loaded"
// }
// )

// document.querySelector("form").addEventListener("submit", (e) => {
//     e.preventDefault()
//     console.log("Form Submitted");
// })
// grandParent.addEventListener("click", (e) => {
//     console.log("GrandParent Clicked");
// })

// parent.addEventListener("click", (e) => {
//     console.log("Parent Clicked");
// })


// child.addEventListener("click", (e) => {
//     e.stopPropagation()
//     console.log("Child Clicked");
// })



// child.addEventListener("mouseover", (e) => {
//     const p = `<p>MouseOver</p>`
//     child.innerHTML = p
// })
// child.addEventListener("mouseout", e => {
//     child.innerHTML = `<p>MouseOut</p>`
// })


example.addEventListener("mousedown", (e) => {
    // example.innerHTML = "<p>MouseDown</p>"
})

example.addEventListener('mouseup', e => {
    // example.innerHTML = "<p>MouseUp</p>"
})

example.addEventListener("mousemove", e => {
    // console.log();
    // example.innerHTML = `
    //    x oxu: ${e.clientX},
    //    y oxu:  ${e.clientY}
    // `

})
// example.addEventListener("dblclick", e => {
//     example.innerHTML = "<p>DoubleClick</p>"
// }
// )

document.addEventListener("mousemove", e => {
    //     console.log('DOM clicked');
    //     example.innerHTML = `
    //     x oxu: ${e.clientX},
    //     y oxu:  ${e.clientY}
    //  `

    //     let hexX = e.clientX.toString(16).padStart(2, '0');
    //     let hexY = e.clientY.toString(16).padStart(2, '0');
    //     let hexNumber = (hexX + hexY).slice(0, 6);

    //     if (hexNumber.length < 6) {
    //         hexNumber = hexNumber.padEnd(6, '0');
    //     }

    //     example.style.backgroundColor = `#${hexNumber}`
})

const body = document.querySelector('body')
body.addEventListener("keyup", e => {
    if (e.key == "Enter") {
        //some operations
    }
})



const input = document.querySelector("input")

input.addEventListener("change", e => {
    console.log(e.target.value);
    console.log('s');
})

input.addEventListener("select", e => {
    console.log('you select some text');
})

// input.addEventListener("focus", (e) => {
//     input.style.borderTopWidth = '5px'
//     input.style.borderColor = 'red'
// })
// input.addEventListener("blur", () => {

//     input.style.borderColor = 'yellow'
// })

