const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Ao executar getSavedCartItems, o método localStorage.getItem deve ser chamado.', () => {
    expect.assertions(1);
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalled();
  });

  it('Ao executar getSavedCartItems, localStorage.getItem é chamado com o parâmetro cartItens.', () => {
    expect.assertions(1);
    getSavedCartItems()
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems')
  });
});