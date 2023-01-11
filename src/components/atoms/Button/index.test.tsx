import { render, screen } from '@testing-library/react';
import Button from './index';

test('renders button', () => {
  const mockClick = jest.fn();
  render(<Button text="test" onClick={mockClick} />);
  const label = screen.getByText(/test/i);
  expect(label).toBeInTheDocument();
  expect(mockClick.call.length).toBe(1);
});
test('renders button with class name', () => {
  const mockClick = jest.fn();
  const { container } = render(
    <Button text="test" onClick={mockClick} className="class-name" />
  );
  expect(container.children[0]).toHaveClass('class-name');
});
