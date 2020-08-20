import React from 'react';
import { Button } from './index';
import { render } from '@testing-library/react';

describe('Component - Button', () => {
	it('should find button by text', () => {
		const text = 'Button'
		const { getByText } = render(<Button>{text}</Button>)
		expect(getByText(text)).toBeInTheDocument()
	})
})