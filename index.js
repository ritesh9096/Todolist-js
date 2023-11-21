const addtask = document.querySelector(".add");
const tasks = document.querySelector(".tasks");
const clearAll = document.querySelector(".clear");
const messagespan = document.querySelector(".message span");
const searchtask = document.querySelector(".search");
                
function updatemassage() {
  const textcontent = tasks.children.length;.  

  messagespan.textContent = `You have ${textcontent} pending tasks`;
}
updatemassage();

addtask.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = addtask.task.value.trim();

  if (value.length) {
    tasks.innerHTML += `<li>
                            <span>${value}</span>
                            <i class="bi bi-trash-fill delete"></i>
                        </li>`;

    addtask.reset();
    updatemassage();
  }
});

tasks.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
    updatemassage();
  }
});

clearAll.addEventListener("click", (event) => {
  const taskitem = tasks.querySelectorAll("li");

  taskitem.forEach((item) => {
    item.remove();
    updatemassage();
  });
});

function filetertask(term) {
  console.log(term);
}

function filetertask(term) {
  Array.from(tasks.children)
    .filter(task => {
      return !task.textContent.toLowerCase().includes(term);
    })
    .forEach(task => {
      task.classList.add("hide");
    });

  Array.from(tasks.children)
    .filter(task => {
      return task.textContent.toLowerCase().includes(term);
    })
    .forEach(task => {
      task.classList.remove("hide");
    });
}

searchtask.addEventListener("keyup", (event) => {
  const term = searchtask.task.value.trim();
  filetertask(term);
});

searchtask.addEventListener("click", (event) => {
    if (event.target.classList.contains("reset")) {
        searchtask.reset();
        const term = searchtask.task.value.trim();
        filetertask(term);
    }
})
