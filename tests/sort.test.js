import { sortBy } from '../src/components/sort';

describe('Test sort functions', () => {
  const arr = [
    {"title": "aaa", "date": "2021-04-22", "priority": "1"},
    {"title": "bbb", "date": "2222-04-21", "priority": "2"}
  ]

  test('sortBy sorts by ascending priority', () => {
    const sortedArray = sortBy(arr, "PriorityAscending");
    expect(sortedArray).toStrictEqual([{"date": "2021-04-22", "priority": "1", "title": "aaa"}, {"date": "2222-04-21", "priority": "2", "title": "bbb"}]);
  });

  test('sortBy sorts by ascending priority without mixing up', () => {
    const sortedArray = sortBy(arr, "PriorityAscending");
    expect(sortedArray).not.toStrictEqual([{"date": "2222-04-21", "priority": "2", "title": "bbb"}, {"date": "2021-04-22", "priority": "1", "title": "aaa"}]);
  });

  test('sortBy sorts by descending priority', () => {
    const sortedArray = sortBy(arr, "PriorityDescending");
    expect(sortedArray).toStrictEqual([{"date": "2222-04-21", "priority": "2", "title": "bbb"}, {"date": "2021-04-22", "priority": "1", "title": "aaa"}]);
  });

  test('sortBy sorts by descending priority without mixing up', () => {
    const sortedArray = sortBy(arr, "PriorityDescending");
    expect(sortedArray).not.toStrictEqual([{"date": "2021-04-22", "priority": "1", "title": "aaa"}, {"date": "2222-04-21", "priority": "2", "title": "bbb"}]);
  });

  test('sortBy sorts by ascending title', () => {
    const sortedArray = sortBy(arr, "TitleAscending");
    expect(sortedArray).toStrictEqual([{"date": "2021-04-22", "priority": "1", "title": "aaa"}, {"date": "2222-04-21", "priority": "2", "title": "bbb"}]);
  });

  test('sortBy sorts by descending title', () => {
    const sortedArray = sortBy(arr, "TitleDescending");
    expect(sortedArray).toStrictEqual([{"date": "2222-04-21", "priority": "2", "title": "bbb"}, {"date": "2021-04-22", "priority": "1", "title": "aaa"}]);
  });

  test('sortBy sorts by ascending date', () => {
    const sortedArray = sortBy(arr, "DateAscending");
    expect(sortedArray).toStrictEqual([{"date": "2021-04-22", "priority": "1", "title": "aaa"}, {"date": "2222-04-21", "priority": "2", "title": "bbb"}]);
  });

  test('sortBy sorts by descending date', () => {
    const sortedArray = sortBy(arr, "DateDescending");
    expect(sortedArray).toStrictEqual([{"date": "2222-04-21", "priority": "2", "title": "bbb"}, {"date": "2021-04-22", "priority": "1", "title": "aaa"}]);
  });
});
