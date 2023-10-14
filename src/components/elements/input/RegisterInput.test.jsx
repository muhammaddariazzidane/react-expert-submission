import { describe, it, expect, afterEach, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import RegisterInput from './RegisterInput';

expect.extend(matchers);

describe('RegisterInput component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should call login function when login button is clicked', async () => {
    const mockRegister = vi.fn();
    render(
      <MemoryRouter>
        <RegisterInput register={mockRegister} />
      </MemoryRouter>
    );
    const nameInput = await screen.getByPlaceholderText('Name');
    await userEvent.type(nameInput, 'Coba register');
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'cregister@gmail.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'nnnnnn');
    const loginButton = await screen.getByRole('button', { name: 'Register' });

    await userEvent.click(loginButton);
    expect(mockRegister).toBeCalledWith({
      name: 'Coba register',
      email: 'cregister@gmail.com',
      password: 'nnnnnn',
    });
  });
  it('should handle Name typing correctly', async () => {
    render(
      <MemoryRouter>
        <RegisterInput register={() => {}} />
      </MemoryRouter>
    );

    const nameInput = await screen.getByPlaceholderText('Name');

    await userEvent.type(nameInput, 'Coba register');

    expect(nameInput).toHaveValue('Coba register');
  });

  it('should handle email typing correctly', async () => {
    render(
      <MemoryRouter>
        <RegisterInput register={() => {}} />
      </MemoryRouter>
    );

    const emailInput = await screen.getByPlaceholderText('Email');

    await userEvent.type(emailInput, 'cregister@gmail.com');

    expect(emailInput).toHaveValue('cregister@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    render(
      <MemoryRouter>
        <RegisterInput register={() => {}} />
      </MemoryRouter>
    );

    const passwordInput = await screen.getByPlaceholderText('Password');

    await userEvent.type(passwordInput, 'nnnnnn');

    expect(passwordInput).toHaveValue('nnnnnn');
  });
});
