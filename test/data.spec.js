// importamos la función `example`
import { example, funcionDeFiltrado, funcionDeOrden } from '../src/data';

describe('example', () => {
  it('debería ser una función', () => {
    expect(typeof example).toBe('function');
  });

  describe('example', () => {
    // escribe aquí tu test
  });
});

describe(funcionDeFiltrado, () => {
  it('debería ser una función', () => {
    expect(typeof funcionDeFiltrado).toBe('function');
  });
  it('deberia devolver todos si el valor es All', () => {
    // eslint-disable-next-line no-undef
    const filtrado = funcionDeFiltrado('all');
    expect(filtrado[0].name).toBe('Aatrox');
  });

  describe(funcionDeOrden, () => {
    it('debería ser una función', () => {
      expect(typeof funcionDeOrden).toBe('function');
    });
  });
});
