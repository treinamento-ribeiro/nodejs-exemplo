import { render, screen } from '@testing-library/react';

function Home() {
  return <h1>Olá, Next.js!</h1>;
}

test('renderiza o texto Olá, Next.js!', () => {
  render(<Home />);
  expect(screen.getByText('Olá, Next.js!')).toBeInTheDocument();
});
