import React from 'react';
import { shallow } from 'enzyme';

import Board from './Board';
import BoardItem from '../BoardItem/BoardItem';

const account = ({ type, currency }: any) => ({
    id: +new Date(),
    title: 'test',
    type,
    amount: 100,
    currency,
});

describe('Board', () => {
    /**
     * Тебе нужно написать код реализации компонента Board в файле Board.ts
     *
     * Компонент Board
     * Пример использования: <Board accounts={[ account1, account2, ... ]} />
     * Параметр: accounts - неотсортированный массив аккаунтов
     * Не забудь про сортировку аккаунтов. Порядок следующий - дебетовые карты (debit) => кредитные (credit) => карты сторонних банков (external) => вклады (saving) => кредиты (loan)
     * Если есть несколько аккаунтов одного типа, то сортируем их по валюте RUB => USD => EUR => GBP
     */

    it('Если аккаунтов нет, то ничего не рендерим', () => {
        const component = shallow(<Board accounts={[]} />);

        expect(component.find(BoardItem).length).toBe(0);
    });

    it('Проверяем рендеринг всех возможных продуктов', () => {
        const accounts = [
            account({ type: 'credit', currency: 'USD' }),
            account({ type: 'debit', currency: 'USD' }),
            account({ type: 'loan', currency: 'RUB' }),
            account({ type: 'debit', currency: 'RUB' }),
            account({ type: 'external' }),
            account({ type: 'credit', currency: 'RUB' }),
            account({ type: 'saving', currency: 'RUB' }),
            account({ type: 'loan', currency: 'USD' }),
            account({ type: 'debit', currency: 'EUR' }),
            account({ type: 'saving', currency: 'USD' }),
            account({ type: 'debit', currency: 'GBP' }),
        ];

        const component = shallow(<Board accounts={accounts} />);
        const boardItems = component.find(BoardItem);

        // отредерилось 11 аккаунтов
        expect(boardItems.length).toBe(11);

        const rightOrder = [
            { type: 'debit', currency: 'RUB' },
            { type: 'debit', currency: 'USD' },
            { type: 'debit', currency: 'EUR' },
            { type: 'debit', currency: 'GBP' },
            { type: 'credit', currency: 'RUB' },
            { type: 'credit', currency: 'USD' },
            { type: 'external' },
            { type: 'saving', currency: 'RUB' },
            { type: 'saving', currency: 'USD' },
            { type: 'loan', currency: 'RUB' },
            { type: 'loan', currency: 'USD' },
        ];

        // аккаунты отрендерились в правильном порядке
        rightOrder.forEach((item, index) => {
            const props = boardItems.get(index).props;

            expect(props.type).toEqual(item.type);
            expect(props.currency).toEqual(item.currency);
        });
    });
});
