import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {fireEvent, render} from '@testing-library/react';

import Sidebar from '../../Dashboard/common/Sidebar';

test('render content', () => {
    const open = true;
    const mockHandler = jest.fn();

    const component = render(<Sidebar open={open} drawerWidth={240} toggleDrawer={mockHandler} /> );
    const buttonDrawer = component.container.querySelector('button');
    fireEvent.click(buttonDrawer);

    expect(mockHandler).toHaveBeenCalledTimes(1);
    expect(component.container).toHaveTextContent('Dashboard');
    expect(component.container).toHaveTextContent('Admisiones');
});