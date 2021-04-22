import { toDoItem, checkForDuplicates } from '../src/components/todoSubmit';
import { todoItems } from '../src/components/localStorage';

describe('Test the todo-submit functionalities', () => {
  const newItem = toDoItem("title", "description", "date", "priority", "project");
  test('toDoItem is function', () => {
    expect(typeof toDoItem).toBe("function");
  });

  test('toDoItem creates items', () => {
    expect(newItem).toBeDefined;
  });

  test('created items are objects', () => {
    expect(typeof newItem).toBe("object");
  });

  test('duplicates are detected', () => {
    todoItems.push({"title": "aaa", "date": "2021-04-22", "description": "blabla"});
    const newItem = {"title": "aaa", "date": "2021-04-22", "description": "blabla"};
    expect(checkForDuplicates(newItem)).toBe(false);
  });
});
