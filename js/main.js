function createTask (title, description) {
    console.log("creando...")
    
    const inputName = document.getElementById("input-name").value
    console.log(inputName)

    const inputCount = document.getElementById("input-count").value
    console.log(inputCount)

    const item = {
        name: inputName,
        count: inputCount       
    }

    if (localStorage.getItem("items") == null) {
        localStorage.setItem("items", "[]")
    }

    const itemsString = localStorage.getItem("items")
    const items = JSON.parse(itemsString)
    items.push(item)
    localStorage.setItem ("items",JSON.stringify(items))
    readTasks ()
}

function readTasks ()  {

    if (localStorage.getItem("items") == null) {
        localStorage.setItem("items", "[]")
    }
    const itemsString = localStorage.getItem("items")
    const items = JSON.parse(itemsString)
    const itemsList = document.getElementById("items-list")
    let itemsListChild = ""
    items.forEach((item, index) => {
        itemsListChild +=
            `<li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">${item.name}</div>
                </div>
                <span class="badge bg-secondary rounded-pill  me-auto">
                    ${item.count}
                </span>
                <div class="btn-group ml-2" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-outline-primary" onclick="updateTask(${index})" data-bs-toggle="modal" data-bs-target="#edit-modal">Editar</button>
                    <button type="button" class="btn btn-outline-danger" onclick="deleteTask(${index})">Borrar</button>
                </div>
            </li>`
    });
    itemsList.innerHTML = itemsListChild
}


function deleteTask (index) {
    const itemsString = localStorage.getItem("items")
    const items = JSON.parse(itemsString)
    items.splice(index,1)
    const updatedItemsString=JSON.stringify(items)

    localStorage.setItem("items", updatedItemsString)
    readTasks()
    console.log("borrando...", index) 
}