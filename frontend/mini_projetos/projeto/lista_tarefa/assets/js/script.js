// * seleção do elemento
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const searchInput = document.querySelector('#search-input');
const eraseBtn = document.querySelector('#erase-button');
const filterBtn = document.querySelector('#filter-select');

let oldInputValue;
// * Funçao
const saveTodo = (text, done = 0, save = 1) => {
  /* criar */
  const todo = document.createElement("div");
  todo.classList.add('todo');

  const todoTitle = document.createElement("h3")
  todoTitle.innerText = text;
  todo.appendChild(todoTitle);

  /* finalizar */
  const doneBtn = document.createElement("button")
  doneBtn.classList.add("finish-todo")
  doneBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
  todo.appendChild(doneBtn);

  /* editar*/
  const editBtn = document.createElement("button")
  editBtn.classList.add("edit-todo")
  editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
  todo.appendChild(editBtn);

  /* deletar */
  const deleteBtn = document.createElement("button")
  deleteBtn.classList.add("remove-todo")
  deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
  todo.appendChild(deleteBtn);

  /* localstorage  */
  if (done) {
    todo.classList.add("done");
  }

  if (save) {
    saveTodoLocalStorage({ text, done: 0 });
  }


  /* retorn vazio */
  todoList.appendChild(todo);
  todoInput.value = ""
  todoInput.focus();
}

//aparecer e desaparecer form
const toggleForms = () => {
  editForm.classList.toggle("hide")
  todoForm.classList.toggle("hide")
  todoList.classList.toggle("hide")
}


const updateTodo = (text) => {

  const todos = document.querySelectorAll(".todo");

  todos.forEach((todo) => {
    //armazena titulo
    let todoTitle = todo.querySelector("h3");
    console.log(todoTitle, text)
    //verifica o titulo 
    if (todoTitle.innerText === oldInputValue) {
      //passa para novo titulo
      todoTitle.innerText = text;

      //local storage 
      updateTodoLocalStorage(oldInputValue, text);
    }
  });

}
//metodo buscar
const getSearchedTodo = (search) => {
  const todos = document.querySelectorAll(".todo");

  todos.forEach((todo) => {
    const todoTitle = todo.querySelector("h3").innerText.toLowerCase();

    todo.style.display = "flex";

    if (!todoTitle.includes(search)) {
      todo.style.display = "none"
    }
  })
}
//metodo filtrar
const filterTodos = (filterValue) => {
  const todos = document.querySelectorAll(".todo");

  switch (filterValue) {
    // filtrar todos
    case "all":
      todos.forEach((todo) =>
        (todo.style.display = "flex"));
      break;
    //filtar feitos
    case "done":
      todos.forEach((todo) => {
        todo.classList.contains("done")
          ? (todo.style.display = "flex")
          : (todo.style.display = "none")
      });
      break;
    //a fazer
    case "todos":
      todos.forEach((todo) => {
        !todo.classList.contains("done")
          ? (todo.style.display = "flex")
          : (todo.style.display = "none")
      }
      );
      break;

    default:
      break;
  }
}

// * Eventos
/*  envio form */
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = todoInput.value;

  if (inputValue) {
    //save tarefa 
    saveTodo(inputValue)
  }
});

/* evento click */
document.addEventListener('click', (e) => {

  const targetEl = e.target;
  const paramEl = targetEl.closest("div");
  let todoTitle;

  if (paramEl && paramEl.querySelector("h3")) {
    todoTitle = paramEl.querySelector("h3").innerText || "";
  }

  // conclui tarefa
  if (targetEl.classList.contains("finish-todo")) {
    paramEl.classList.toggle("done");
    //local Storage
    updateTodoStatusLocalStorage(todoTitle);
  }

  // editar tarefa
  if (targetEl.classList.contains("edit-todo")) {
    toggleForms();

    editInput.value = todoTitle;
    oldInputValue = todoTitle;
  }

  //remover tarefa
  if (targetEl.classList.contains("remove-todo")) {
    paramEl.remove();
    //localstorage :
    removeTodoLocalStorage(todoTitle);
  }
  // cancelar
  cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleForms();
  })
  //editar
  editForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const editInputValue = editInput.value;

    if (editInputValue) {
      // atualizar
      updateTodo(editInputValue);
    }

    toggleForms();
  })

  // Pesquisar :
  searchInput.addEventListener("keyup", (e) => {
    const search = e.target.value;
    getSearchedTodo(search);

  })
  // limpa search 
  eraseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchInput.value = ""

    search.dispatchEvent(new Event("keyup"));
  })

  //filtrar
  filterBtn.addEventListener("change", (e) => {
    const filterValue = e.target.value;
    filterTodos(filterValue)
    console.log(filterValue)
  })
})

// local storage setting :
//converter json
const getTodosLocalStorage = () => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];

  return todos;
}
//carregar
const loadTodos = () => {
  const todos = getTodosLocalStorage();

  todos.forEach((todo) => {
    saveTodo(todo.text, todo.done, 0);
  });
};
//salva dados
const saveTodoLocalStorage = (todo) => {
  const todos = getTodosLocalStorage();

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};
// remove dados do storage

const removeTodoLocalStorage = (todoText) => {
  const todos = getTodosLocalStorage();

  // filtrar o array
  const filteredTodos = todos.filter((todo) =>
    todo.text != todoText
  );

  localStorage.setItem("todos", JSON.stringify(filteredTodos));
};

// atualizar Storage status

const updateTodoStatusLocalStorage = (todoText) => {
  const todos = getTodosLocalStorage();

  todos.map((todo) =>
    todo.text === todoText ? (todo.done = !todo.done) : null
  )
};

const updateTodoLocalStorage = (todoOldText, todoNewText) => {
  const todos = getTodosLocalStorage();

  todos.map((todo) =>
    todo.text === todoOldText ? (todo.text = todoNewText) : null
  );

  localStorage.setItem("todos", JSON.stringify(todos))
};

loadTodos();