import navigationFunctions from '../src/components/navigation';

describe('Test navigation functions', () => {
  test('navigationFunctions is defined', () => {
    expect(navigationFunctions).toBeDefined;
  });

  test('navigationFunctions is working function', () => {
    expect(typeof navigationFunctions).toEqual("function");
  });

  test('closeAllOtherSectionsExceptFor is defined', () => {
    expect(navigationFunctions.closeAllOtherSectionsExceptFor).toBeDefined;
  });
});