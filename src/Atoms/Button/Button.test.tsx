import React from 'react';
import { Button } from './index';
import { render, waitForElement } from '@testing-library/react';
import renderer from 'react-test-renderer'
import 'jest-styled-components'

describe('Component - Button', () => {
	it('it\'s works', () => {
		const text = 'Button'
		const tree = renderer.create(<Button>{text}</Button>).toJSON()
		expect(tree).toMatchSnapshot()
	})

	it('Should change scheme color to secondary', async () => {
		const text = 'Button'
		const tree = renderer.create(<Button theme="secondary" data-testid="btn">{text}</Button>).toJSON()

		expect(tree).toHaveStyleRule('background-color', '#FFD146')
		expect(tree).toHaveStyleRule('color', '#FFFFFF')
	})

	it('Should change scheme color to disabled', async () => {
		const text = 'Button'
		const tree = renderer.create(<Button disabled={true} theme="secondary" data-testid="btn">{text}</Button>).toJSON()
		expect(tree).toHaveStyleRule('color', '#FFFFFF')
	})
})