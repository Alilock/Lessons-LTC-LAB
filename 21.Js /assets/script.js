const btn = document.querySelector(".createBtn");
const inp = document.querySelector("#create");
const items = document.querySelector(".items");
const dropZones = document.querySelectorAll(".dropZone");

btn.addEventListener("click", () => {
    CreateItem();
});

inp.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        CreateItem();
    }
});

let count = 1;
function CreateItem() {
    let value = inp.value;
    if (value.trim()) {
        let li = document.createElement("li");
        let i = document.createElement("i");
        i.className = "fa-regular fa-trash-can fs-2 delete";
        i.style.cursor = "pointer";
        li.id = count++;
        li.className =
            "d-flex justify-content-between text-danger fs-4 my-2 list-group-item";
        li.innerText = value;
        li.setAttribute("draggable", "true");
        li.append(i);
        items.append(li);
    }
    inp.value = "";
    let icons = document.querySelectorAll(".delete");
    icons.forEach((icon) => {
        icon.addEventListener("click", function () {
            this.parentElement.remove();
        });
    });
    DragDrop();
}
function DragDrop() {
    let dragItems = document.querySelectorAll(".list-group-item");
    dragItems.forEach((dragItem) => {
        dragItem.addEventListener("dragstart", function (e) {
            e.dataTransfer.setData("text", e.target.id);
        });
    });
    dropZones.forEach((zone) => {
        zone.addEventListener("dragover", function (e) {
            e.preventDefault();
            this.style.boxShadow = "0px 0px 53px 4px rgba(0,0,0,0.58)";
        });
        zone.addEventListener("dragleave", function () {
            this.style.boxShadow = "none";
        });
        zone.addEventListener("drop", function (e) {
            let id = e.dataTransfer.getData("text");
            let element = document.getElementById(id);
            if (id) {
                let ul = this.querySelector(".items");
                ul.append(element);
            }
            this.style.boxShadow = "none";
        });
    });
}