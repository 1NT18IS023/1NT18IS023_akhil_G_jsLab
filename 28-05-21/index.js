const btn = document.getElementById('btn');
const container = document.getElementById('tasks');
const search = document.getElementById('query');

let tasks = [];

const randId = () => Math.floor(Math.random() * 100);

function renderTaskList() {
  return `
        <ul>
            ${tasks.map(
              (t) =>
                `
                    <div class="flex">
                        <li class="list" id="${t.id}">
                        <span
                         style="text-decoration:${
                           t.completed ? "line-through" : "none"
                         }"
                        >${t.name}</span>
                        <span class="btn" onclick="statusHandler(${
                          t.id
                        })">✅</span>
                        <span class="btn" onclick="removeHandler(${
                            t.id
                        })">❌</span>
                        </li>
                    </div> 
                `
            )}
        </ul>
        `;
}

function renderResults(result) {
    return `
        ${result.length !== 0 ?
            `
        <ul>
            ${result.map(task =>
                `
                    <div class="flex">
                        <li class="list" id="${task.id}">
                            <span
                            style="text-decoration:${task.completed ? "line-through" : "none"}"
                            >${task.name}</span>
                            <span class="btn" onclick="statusHandler(${
                                task.id
                            })">✅</span>
                            <span class="btn" onclick="removeHandler(${
                                task.id
                            })">❌</span>
                        </li>
                    </div> 
                `
            )}
        </ul>
        `
            : "No results found."}
    `
}

const statusHandler = (id) => {
    const idx = tasks.findIndex(t => t.id === id);
    tasks[idx].completed = !tasks[idx].completed;
    
    container.innerHTML = renderTaskList();
}

const removeHandler = (id)=> {
    tasks = tasks.filter(t => t.id !== id);
    container.innerHTML = renderTaskList();
}

btn.addEventListener('click', () => {
    console.log("clicked");
    const task = document.getElementById("task");

    const item = {
        id: randId(),
        name: task.value,
        completed : false
    };

    tasks.push(item);
    console.log(tasks);
    tasks.value = "";

    container.innerHTML = renderTaskList();

});


search.addEventListener('change', () => {
    let result = tasks.filter(t => t.name === search.value);

    container.innerHTML = renderResults(result);
});