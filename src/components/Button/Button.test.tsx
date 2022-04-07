import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('Button', () => {
	/**
	 * Тебе нужно написать код реализации компоента Button в файле Button.js
	 *
	 * Компонент Button
	 * Пример использования: <Button onClick={this.handleClick}>Кнопка</Button>
	 * Параметр: type - тип кнопки
	 * Параметр: children - текст кнопки
	 * Параметр: onClick - callback, обработчик события клика по кнопке
	 *
	 * Для стилизации компонента можно использовать Button.module.css
	 */

	it('Кнопка с текстом', () => {
		const component = shallow(<Button>Кнопка</Button>);

		expect(component.html()).toEqual('<button class="button">Кнопка</button>');
	});

	it('Кнопка с текстом и типом', () => {
		const component = shallow(<Button type="submit">Кнопка</Button>);

		expect(component.html()).toEqual(
			'<button class="button" type="submit">Кнопка</button>'
		);
	});

	it('Вызов события', () => {
		const eventOnCLick = jest.fn();
		const component = shallow(<Button onClick={eventOnCLick}>Кнопка</Button>);

		component.find('button').simulate('click');

		expect(eventOnCLick).toHaveBeenCalled();
	});
});
