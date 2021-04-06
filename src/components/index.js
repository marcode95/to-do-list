import '../assets/style.css';

const toDoItem = (title, description, date, priority, project) => {
  return { title, description, date, priority, project };
};

const toDoItems = []

const submitButton = document.getElementById('submitInput')

submitButton.addEventListener('click', () => {
  const title = document.getElementById('titleInput').value;
  const description = document.getElementById('descriptionInput').value;
  const date = document.getElementById('dateInput').value;
  const priority = document.getElementById('priorityInput').value;
  const project = document.getElementById('projectInput').value;
  const newItem = toDoItem(title, description, date, priority, project);
  toDoItems.push(newItem);
  console.log(toDoItems)
});

const projectSubmitButton = document.getElementById('projectSubmitInput')
const projectOptions = document.getElementById('projectInput')

projectSubmitButton.addEventListener('click', () => {
  const project = document.getElementById('projectTitleInput').value;
  const option = document.createElement('option');
  option.setAttribute('value', project);
  option.textContent = project
  projectInput.append(option)
});