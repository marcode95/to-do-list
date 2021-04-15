import {
  getProjects, getTodos, setProjects, todoItems, projects,
} from './localStorage';

const submitButton = document.getElementById('submitInput');
const projectListItems = document.getElementById('project-list-items');
const projectSubmitButton = document.getElementById('projectSubmitInput');
const projectOptions = document.getElementById('projectInput');

const toDoItem = (title, description, date, priority, project) => ({
  title, description, date, priority, project,
});

const todayDate = new Date();
let dd = todayDate.getDate();
let mm = todayDate.getMonth() + 1;
const yyyy = todayDate.getFullYear();
if (dd < 10) {
  dd = `0${dd}`;
}
if (mm < 10) {
  mm = `0${mm}`;
}
const today = `${yyyy}-${mm}-${dd}`;

const createProjectButton = (project) => {
  const projectLink = document.createElement('button');
  projectLink.setAttribute('data-project', project);
  projectLink.setAttribute('id', `${project}Link`);
  projectLink.classList.add('project-option-links');
  projectLink.textContent = project;
  projectListItems.append(projectLink);
};

const addProjectOptions = () => {
  getProjects();
  projectOptions.innerHTML = '<option value="">Project</option>';
  projectListItems.innerHTML = '';
  for (let i = 0; i < projects.length; i += 1) {
    const option = document.createElement('option');
    option.setAttribute('value', projects[i]);
    option.textContent = projects[i];
    projectOptions.append(option);
    createProjectButton(projects[i]);
  }
};

const checkForDuplicates = (newItem) => {
  for (let i = 0; i < todoItems.length; i += 1) {
    // eslint-disable-next-line max-len
    if (todoItems[i].title === newItem.title && todoItems[i].description === newItem.description && todoItems[i].date === newItem.date) {
      return false;
    }
  }
  return true;
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
    getTodos();
    todoItems.push(newItem);
    localStorage.setItem('todos', JSON.stringify(todoItems));
    location.reload();
    return true;
  });

  projectSubmitButton.addEventListener('click', () => {
    const project = document.getElementById('projectTitleInput').value;
    if (!project || project.length > 12) {
      return false;
    }
    projects.push(project);
    setProjects();
    addProjectOptions();
    return true;
  });
};

export {
  addProjectOptions,
  todoItems,
  projects,
  toDoItem,
  today,
};

export default todoSubmitListeners;
