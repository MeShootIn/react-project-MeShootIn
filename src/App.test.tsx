import React from 'react';
import { mount } from 'enzyme';

import App, { accounts } from './App';
import NewAccountForm from './components/NewAccountForm/NewAccountForm';
import Board from './components/Board/Board';

const createEvent = (name, value) => ({ target: { name, value } });

Date.now = jest.fn(() => 123456);

describe('Интеграционный тест', () => {
  /*
   * Проверяем интеграцию модулей
   * Должен отработать корректно, если все остальные тесты прошли.
   * */

  it('Проверяем наличие формы NewAccountForm на странице', () => {
    const component = mount(<App />);

    expect(component.find(NewAccountForm).length).toBe(1);
  });

  it('Проверяем наличие списка аккаунтов Board', () => {
    const component = mount(<App />);

    expect(component.find(Board).length).toBe(1);
  });

  it('обновление стейта App', () => {
    const component = mount(<App />);
    const result = [
      ...accounts,
      { id: Date.now(), type: 'external', title: 'Привязанная карта *4444' },
    ];

    component
        .find('input[name="cardNumber"]')
        .simulate('change', createEvent('cardNumber', '1111222233334444'));

    component
        .find('input[name="year"]')
        .simulate('change', createEvent('year', '20'));

    component
        .find('input[name="month"]')
        .simulate('change', createEvent('month', '12'));

    component.find('form').simulate('submit');

    const board = component.find('Board');

    component.render();

    expect(board.prop('accounts')).toEqual(result);
  });
});
