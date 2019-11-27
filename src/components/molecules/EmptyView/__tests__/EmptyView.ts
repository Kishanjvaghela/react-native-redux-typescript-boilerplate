import React from 'react';
import renderer from 'react-test-renderer';

import EmptyView from '../index';

it('renders correctly with defaults', () => {
    const button = renderer
        .create(<EmptyView title="World" description = "This is description" />)
        .toJSON();
    expect(button).toMatchSnapshot();
});