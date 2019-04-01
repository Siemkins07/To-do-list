const form = document.querySelector('form');
const btnAdd = document.querySelector(".add");
const btnSearch = document.querySelector(".search")
const ul = document.querySelector('ul')

const inputText = document.querySelector('.text')
const taskNumber = document.querySelector('h1 span');
const inputFind = document.querySelector('.find')

let number = 0



const searchTask = (e) => {
  const liElements = document.querySelectorAll('li')
  const searchText = e.target.value.toLowerCase();
  let tasks = [...liElements];
  console.log(tasks)
  tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
  console.log(tasks)
  ul.textContent = '';
  tasks.forEach(li => ul.appendChild(li));
  taskNumber.textContent = document.querySelectorAll('li').length;

}


const removeTask = (e) => {
  if (number >= 0) {
    e.target.parentNode.remove();
    number--
    taskNumber.textContent = `: ${number}`;
  }
  return
}
const addTask = (e) => {
  e.preventDefault();
  const newTask = inputText.value;
  if (inputText.value == '') return;
  const li = document.createElement("li");
  number++
  ul.appendChild(li);
  // li.textContent = newTask + "<button>Done</button>"; //to nie działa
  li.innerHTML = newTask + "  " + "<button>Done</button>";
  inputText.value = '';
  taskNumber.textContent = `: ${number}`;

  li.querySelector('button').addEventListener('click', removeTask)


}

inputFind.addEventListener("input", searchTask)
form.addEventListener('submit', addTask)