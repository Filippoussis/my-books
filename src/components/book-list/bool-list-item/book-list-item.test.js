import React from 'react';
import {render, screen} from '@testing-library/react';

import BookListItem from './book-list-item';

describe('Component: BookListItem', () => {
  it('should render correctly', () => {
    render(<BookListItem />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Удалить')).toBeInTheDocument();
  });
});
