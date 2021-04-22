import { getTodos, setTodos, getProjects, setProjects, todoItems, projects } from '../src/components/localStorage';

describe('Test localStorage', () => {
  test('todoItems are defined', () => {
    expect(todoItems).not.toBeUndefined;
  });

  test('projects are defined', () => {
    expect(projects).not.toBeUndefined;
  });

  test('Set local storage to current state of todoItems', () => {
    todoItems.push(1,2,3);
    setTodos();
    expect(JSON.parse(localStorage.getItem('todos'))).toStrictEqual([1,2,3]);
  });

  test('Set todoItems to current state of local storage', () => {
    localStorage.setItem('todos', JSON.stringify([1,2,3]));
    getTodos();
    expect(todoItems).toStrictEqual([1,2,3]);
  });

  test('Set local storage to current state of projects', () => {
    projects.push(1,2,3);
    setProjects();
    expect(JSON.parse(localStorage.getItem('todos'))).toStrictEqual([1,2,3]);
  });

  test('Set projects to current state of local storage', () => {
    localStorage.setItem('todos', JSON.stringify([1,2,3]));
    getProjects();
    expect(projects).toStrictEqual([1,2,3]);
  });
});