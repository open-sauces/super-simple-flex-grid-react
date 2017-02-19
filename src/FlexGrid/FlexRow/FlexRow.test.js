import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';

import FlexRow from './FlexRow.jsx';

chai.use(chaiEnzyme());


describe('<FlexRow />', () => {
  const elementSelector = '.flex-row';

  it('Renders children prop', () => {
    const childProp = 'Child';
    const wrapper = shallow(<FlexRow>{childProp}</FlexRow>);
    expect(wrapper.find(elementSelector)).to.have.text(childProp);
  });

  it('Renders customClass prop', () => {
    const customClass = 'custom-class';
    const wrapper = shallow(<FlexRow customClass={customClass} />);
    expect(wrapper.find(elementSelector)).to.have.className(customClass);
  });
});
