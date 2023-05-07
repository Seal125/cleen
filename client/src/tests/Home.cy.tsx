import React from 'react';
import Home from '../components/Home';

describe('<Home />', () => {
  it('renders', () => {
    cy.mount(<Home />);
  });
});
