// element create
const container = document.querySelector(".container")
let heading = document.createElement("h1")
let inp = document.createElement('input')
let p = document.createElement("p")
inp.placeholder = "search"
inp.type = "text"
heading.className = "title"

heading.innerText = "heading"
p.innerText = "paragraph"
p.setAttribute("data-id", "basliq")

const value = p.getAttribute("data-id")

container.append(heading)
container.append(p)


const inp2 = document.createElement("input")
const span = document.createElement("span")
const span2 = document.createElement("span")
span.innerText = "bu bir spandir"
span2.innerText = "bu bir span 2 dir"


container.prepend(inp2)
container.append(inp2)
let element2 = container.appendChild(span)


let box = document.createElement('div')
box.className = 'box'
container.appendChild(box)

box.innerHTML = "<img src='./assets/images.jpeg' /> "
box.innerHTML += "<h1 class='dog'>Dog Picture</h1>"

const dogelement = document.querySelector('.dog')


// console.log(dogelement.parentElement.parentElement.parentElement.parentElement.parentElement)



const card = document.querySelector(".card")
// console.log(card.childNodes);

// console.log(card.previousSibling);
// console.log(container.nextElementSibling);
console.log(card.previousSibling);


