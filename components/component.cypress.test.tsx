import Component from './component';
import { mount } from '@cypress/react';

it('should render', () => {
    mount(<Component/>);
    cy.get('h1').should('have.text', 'hello-world');
});