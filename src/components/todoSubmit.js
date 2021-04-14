const submitButton = document.getElementById('submitInput');
const navigation = document.getElementById('navigation');
const projectSubmitButton = document.getElementById('projectSubmitInput');
const projectOptions = document.getElementById('projectInput');

const todoItems = [
  {
    title: 'asdf', description: "wash some random shit I don't know wtf I'm talking about", date: '2021-04-15', priority: '3', project: 'cleaning',
  },
  {
    title: 'asdfasdf', description: 'asdfasdfasdfasdfsassdfsadfasdfasdf', date: '2021-04-16', priority: '1', project: 'cleaning',
  },
  {
    title: 'sdf', description: 'sassdfsadfasdfasdf', date: '2021-04-17', priority: '2', project: 'cleaning',
  },
  {
    title: 'asdf', description: "wash some random shit I don't know wtf I'm talking about", date: '2021-04-20', priority: '3', project: 'shopping',
  },
  {
    title: 'asdfasdf', description: 'asdfasdfasdfasdfsassdfsadfasdfasdf', date: '2021-04-19', priority: '1', project: 'shopping',
  },
  {
    title: 'sdf', description: 'sassdfsadfasdfasdf', date: '2021-04-18', priority: '2', project: 'shopping',
  },
];


const toDoItem = (title, description, date, priority, project) => ({
  title, description, date, priority, project,
});

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
const yyyy = today.getFullYear();
if (dd < 10) {
  dd = `0${dd}`;
}
if (mm < 10) {
  mm = `0${mm}`;
}
today = `${yyyy}-${mm}-${dd}`;

const createProjectButton = (project) => {
  const projectLink = document.createElement('button');
  projectLink.setAttribute('data-project', project);
  projectLink.setAttribute('id', `${project}Link`);
  projectLink.classList.add('project-option-links');
  projectLink.classList.add('display-none');
  projectLink.textContent = project;
  navigation.append(projectLink);
};

const todoSubmitListeners = () => {
  submitButton.addEventListener('click', () => {
    const title = document.getElementById('titleInput').value;
    const description = document.getElementById('descriptionInput').value;
    const date = document.getElementById('dateInput').value;
    const priority = document.getElementById('priorityInput').value;
    const project = document.getElementById('projectInput').value;
    const newItem = toDoItem(title, description, date, priority, project);
    if (!title || !description || !date || !priority) {
      return false;
    }
    if (checkForDuplicates(newItem) === false) {
      return false;
    }
    todoItems.push(newItem);
  });

  projectSubmitButton.addEventListener('click', () => {
    const project = document.getElementById('projectTitleInput').value;
    const option = document.createElement('option');
    option.setAttribute('value', project);
    option.textContent = project;
    projectOptions.append(option);
    createProjectButton(project);
  });
}

const checkForDuplicates = (newItem) => {
  for (let i = 0; i < todoItems.length; i++) {
    if (todoItems[i].title === newItem.title && todoItems[i].description === newItem.description && todoItems[i].date === newItem.date) {
      return false;
    }
  }
};

export {
  todoItems,
  toDoItem,
  today
}

export default todoSubmitListeners;
  