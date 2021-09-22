import React from 'react';
import {render, screen} from '@testing-library/react';

import AddForm from './add-form';

describe('Component: AddForm', () => {
  it('should render correctly', () => {
    render(<AddForm />);

    expect(screen.getByLabelText('Название книги')).toBeInTheDocument();
    expect(screen.getByLabelText('Автор')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Добавить на полку')).toBeInTheDocument();
  });
});
