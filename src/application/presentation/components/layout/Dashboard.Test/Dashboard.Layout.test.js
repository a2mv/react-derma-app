import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import DashboardLayout from '../Dashboard/Dashboard.Layout';


test('render content', () => {
    const divChildren = <div>Render Content</div>;

    const component = render(<DashboardLayout> {divChildren} </DashboardLayout> );

    expect(component.container).toHaveTextContent('Render Content');

});

