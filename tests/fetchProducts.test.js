require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  expect.assertions(1);
  test('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  test('Teste se `fetch` será chamado ao passar `computador`como argumento', async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })

  test('Teste se ao passar `computador` como argumento, o enpoint usado é: https://api.mercadolibre.com/sites/MLB/search?q=computador', async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  test('Se o parâmetro `computador` for passado, deverá retornar um `objeto` igual o importado ``computadorSearch', async () => {
    const result = await fetchProducts('computador');
    expect(result).toEqual(computadorSearch);
  });

  test('Se nenhum parâmetro for passado, então retorne a seguinte mensagem de erro: `You must provide an url`', () => {
    expect(fetchProducts()).rejects.toEqual(new Error('You must provide an url'));
  });
});
