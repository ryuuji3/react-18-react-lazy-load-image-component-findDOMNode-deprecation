import React from 'react';

import { render } from '@testing-library/react';

import Example from './example';


it('should render without an error', () => {
    expect(() => render(<Example />)).not.toThrow();
});