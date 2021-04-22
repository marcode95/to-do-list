import navigationFunctions from '../src/components/navigation';

describe('Test navigation functions', () => {
  test('navigationFunctions is defined', () => {
    expect(navigationFunctions).toStrictEqual(navigationFunctions);
  });

  test('navigationFunctions is working function', () => {
    expect(typeof navigationFunctions).toEqual('function');
  });
});