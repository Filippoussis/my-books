import React from 'react';
import {render, screen} from '@testing-library/react';

import BookList from './book-list';

describe('Component: BookList', () => {
  it('should render correctly', () => {
    render(<BookList />);

    expect(screen.getByTestId('book-list')).toBeInTheDocument();
  });
});
