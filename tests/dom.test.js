import appendElementsDom from '../src/components/dom';

describe('Create single dom elements', () => {
  const arr = [1,2];
  const div = document.createElement('div');
  const indexZero = 0;
  const indexOne = 1;

  test('Creates single todo-item', () => {
    appendElementsDom(arr, div, indexZero);
    expect(div.innerHTML).toContain('single-todo-item');
  });

  test('Creates unique data-attributes to differentiate between todo-items', () => {
    appendElementsDom(arr, div, indexZero);
    expect(div.innerHTML).toContain('data-id="0"');
    expect(div.innerHTML).not.toContain('data-id="1"');
  });

  test('Creates unique data-attributes to differentiate between todo-items', () => {
    appendElementsDom(arr, div, indexOne);
    expect(div.innerHTML).toContain('data-id="0"');
    expect(div.innerHTML).toContain('data-id="1"');
  });
});

