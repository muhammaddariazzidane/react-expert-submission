import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import LoginInput from './LoginInput';

expect.extend(matchers);

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should call login function when login button is clicked', async () => {
    const mockLogin = vi.fn();
    render(
      <MemoryRouter>
        <LoginInput login={mockLogin} />
      </MemoryRouter>
    );
    const usernameInput = await screen.getByPlaceholderText('Username');
    await userEvent.type(usernameInput, 'zidanecuy@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'nnnnnn');
    const loginButton = await screen.getByRole('button', { name: 'Login' });

    await userEvent.click(loginButton);
    expect(mockLogin).toBeCalledWith({
      email: 'zidanecuy@gmail.com',
      password: 'nnnnnn',
    });
  });
  it('should handle username typing correctly', async () => {
    render(
      <MemoryRouter>
        <LoginInput login={() => {}} />
      </MemoryRouter>
    );

    const usernameInput = await screen.getByPlaceholderText('Username');

    await userEvent.type(usernameInput, 'zidanecuy@gmail.com');

    expect(usernameInput).toHaveValue('zidanecuy@gmail.com');
  });
  it('should handle password typing correctly', async () => {
    render(
      <MemoryRouter>
        <LoginInput login={() => {}} />
      </MemoryRouter>
    );

    const passwordInput = await screen.getByPlaceholderText('Password');

    await userEvent.type(passwordInput, 'nnnnnn');

    expect(passwordInput).toHaveValue('nnnnnn');
  });
});
