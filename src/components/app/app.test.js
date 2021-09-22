import React from 'react';
import {render, screen} from '@testing-library/react';

import App from './app';

describe('Component: App', () => {
  it('should render correctly', () => {
    render(<App />);

    expect(screen.getByRole('heading', {level: 1})).toBeInTheDocument();
    expect(screen.getByText('Моя книжная полка')).toBeInTheDocument();
  });
});
