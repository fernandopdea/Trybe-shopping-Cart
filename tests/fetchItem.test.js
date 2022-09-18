require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('Verifica se a função `fetchItem` é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });

  test('Se o argumento `MLB1615760527` for passado para a função `fetchItem`, verificar se fetch foi chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  test('Verifica se a fetch utiliza o endpoint correto ao receber esse argumento do item `MLB1615760527`', async () => {
    await fetchItem('MLB1615760527');
    const URL_API = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toHaveBeenCalledWith(URL_API);
  });

  test('Verifica se o retorno da função `fetchItem` tem a mesma estrutura de dados do objeto `item` importado', async () => {
    const data = await fetchItem('MLB1615760527');
    expect(typeof data).toEqual(typeof item);
    console.log(item);
  });

  test('Ao chamar a função `fetchItem` sem argumento, verifique se retorna essa mensagem `You must provide an url`', async () => {
    expect(fetchItem()).rejects.toEqual(new Error('You must provide an url'));
  });
});
