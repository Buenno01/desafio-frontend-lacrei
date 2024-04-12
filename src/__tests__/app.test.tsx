import { render, screen } from '@testing-library/react';
import App from '../App';
import { vi } from 'vitest';

describe('App', () => {
  it('should render the page', () => {
    render(<App />);

    const header = screen.getByRole('banner');
    const contentTitle = screen.getByRole('heading', { name: /junte-se à nossa comunidade/i });
    const footer = screen.getByRole('contentinfo');

    expect(header).toBeInTheDocument();
    expect(contentTitle).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  it('should scroll to the top when clicking on the button', async () => {
    render(<App />);

    let scrollIntoViewMock = vi.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
    const button = screen.getByTestId('scroll-btn');

    expect(button).toBeInTheDocument();
    expect(scrollIntoViewMock).not.toHaveBeenCalled();

    await button.click();

    expect(scrollIntoViewMock).toHaveBeenCalled();
  });
});