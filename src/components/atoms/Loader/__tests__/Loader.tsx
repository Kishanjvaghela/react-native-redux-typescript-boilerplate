import React from 'react';
import renderer from 'react-test-renderer';

import Loader from '../index';

it('renders correctly with defaults', () => {
    const button = renderer
        .create(<Loader />)
        .toJSON();
    expect(button).toMatchSnapshot();
});