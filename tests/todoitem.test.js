import { addColor } from '../src/components/todoitem';

describe('Test todoitems color switching', () => {
  const item = document.createElement('div');

  test('item gets new low-prio-class assigned', () => {
    addColor(item, "1")
    expect(item.classList).toContain("low-prio");
  });

  test('item gets correct prio-class assigned', () => {
    addColor(item, "1")
    expect(item.classList).not.toContain("mid-prio");
  });

  test('item gets new low-prio-class assigned', () => {
    addColor(item, "1")
    expect(item.classList).not.toContain("high-prio");
  });

  test('item gets new mid-prio-class assigned', () => {
    addColor(item, "2")
    expect(item.classList).toContain("mid-prio");
  });

  test('item gets new low-prio-class assigned', () => {
    addColor(item, "3")
    expect(item.classList).toContain("high-prio");
  });
});
