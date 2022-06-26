import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render} from '@testing-library/react';

import Header from '../../Dashboard/common/Header';

test('render content', () => {
    const open = true;
    const mockHandler = jest.fn();

    const component = render(<Header open={open} drawerWidth={240} toggleDrawer={mockHandler} /> );
    const buttonDrawer = component.container.querySelector('[aria-label="open drawer"]');

    fireEvent.click(buttonDrawer);

    expect(mockHandler).toHaveBeenCalledTimes(1);
    expect(component.container).toHaveTextContent('DermApp');
});
