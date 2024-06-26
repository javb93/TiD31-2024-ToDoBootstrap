function handleAgregar() {
  const input = document.getElementById("inputTarea");
  const listToDo = document.getElementById("listToDo");
  const tarea = input.value;

  if (tarea !== "") {
    //creacion de tarea individual
    const li = document.createElement("li");
    li.className = "list-group mt-2";
    // Creacion de contenedor interno de tarea
    const divInterno = document.createElement("div");
    divInterno.className = "d-flex justify-content-between";
    //Creacion de texto de tarea
    const span = document.createElement("span");
    span.innerText = tarea;
    //Creacion de contenedor de botones
    const divBotones = document.createElement("div");
    //Creacion de boton Done
    const botonDone = document.createElement("button");
    botonDone.type = "button";
    botonDone.className = "btn btn-light";
    botonDone.innerText = "Done";
    botonDone.onclick = handleDone;
    //Creacion de boton Delete
    const botonDelete = document.createElement("button");
    botonDelete.type = "button";
    botonDelete.className = "btn btn-dark";
    botonDelete.innerText = "Delete";
    botonDelete.onclick = handleDelete;
    //AGRUPACION DE ELEMENTOS
    divBotones.appendChild(botonDone);
    divBotones.appendChild(botonDelete);
    divInterno.appendChild(span);
    divInterno.appendChild(divBotones);
    li.appendChild(divInterno);
    listToDo.appendChild(li);
  }
}

function handleDone(event) {
  const li = event.target.parentElement.parentElement.parentElement;
  const listDone = document.getElementById("listDone");
  listDone.appendChild(li);
}

function handleDelete(event) {
  const li = event.target.parentElement.parentElement.parentElement;
  li.remove();
}
