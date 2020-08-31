import React from 'react';
import { Button } from './index';
import { render, waitForElement } from '@testing-library/react';

describe('Component - Button', () => {
	it('should find button by text', () => {
		const text = 'Button'
		const { getByText } = render(<Button>{text}</Button>)
		expect(getByText(text)).toBeInTheDocument()
	})

	it('Should change color to secondary', async () => {
		const text = 'Button'
		const { getByTestId } = render(<Button theme="secondary" data-testid="btn">{text}</Button>)

		const buttonNode = await waitForElement(
			() => getByTestId("btn")
		)

		console.log(buttonNode.style)

	})
})