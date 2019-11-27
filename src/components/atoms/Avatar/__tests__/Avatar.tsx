import React from 'react';
import renderer from 'react-test-renderer';

import Avatar from './../index';

it('renders correctly with defaults', () => {
    const button = renderer
        .create(<Avatar />)
        .toJSON();
    expect(button).toMatchSnapshot();
});