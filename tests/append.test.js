import appendElements from '../src/components/append';

describe('Append dom elements', () => {
  const arr = [1, 2];
  const div = document.createElement('div');

  test('Creates single todo-item', () => {
    appendElements(arr, div);
    expect(div.innerHTML).toContain('single-todo-item');
  });

  test('Creates unique data-attributes to differentiate between todo-items', () => {
    appendElements(arr, div);
    expect(div.innerHTML).toContain('data-id="0"');
    expect(div.innerHTML).toContain('data-id="1"');
    expect(div.innerHTML).not.toContain('data-id="2"');
  });
});
