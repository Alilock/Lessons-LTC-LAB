const input = document.querySelector('input')
const todolist = document.querySelector('.todo .list')
const addBtn = document.querySelector('.addBtn')
const dropZone = document.querySelector('.done')
function addTodo() {
    todolist.innerHTML += `
        <li class="item" draggable="true">
                        <p>${input.value}</p>
                        <button type="button">Delete</button>
                    </li>
    `

    input.value = ''

    DragAndDrop()

}
input.addEventListener('keypress', e => {
    if (e.keyCode == 13) {
        addTodo()
    }

})
addBtn.addEventListener('click', (e) => {
    addTodo()
})

let removeElement = null
function DragAndDrop() {

    const items = document.querySelectorAll(".item")
    items.forEach(item => {
        item.addEventListener("dragstart", e => {
            e.dataTransfer.setData("text", e.target.innerText)

            removeElement = item
        })
    })
}

dropZone.addEventListener("dragover", e => {
    e.preventDefault()
    dropZone.style.opacity = 0.5
})

dropZone.addEventListener('dragleave', e => {
    dropZone.style.opacity = 1
})

dropZone.addEventListener("drop", e => {
    removeElement.remove()
    const text = e.dataTransfer.getData('text')
    dropZone.querySelector('.list').innerHTML += `
    <li class="item" draggable="true">
                    <p>${text}</p>
                    <button type="button">Delete</button>
                </li>
`
})