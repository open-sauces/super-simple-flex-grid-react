import React from 'react';
import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';

import FlexCell, { testClassList } from './FlexCell.jsx';

chai.use(chaiEnzyme());


describe('<FlexCell />', () => {
  const baseElementClass = 'flex-row__cell';
  const baseElementSelector = `.${baseElementClass}`;
  const determineElementClass = modifier => `${baseElementClass} ${baseElementClass}--${modifier}`;

  it('Renders children prop', () => {
    const childProp = 'Child';
    const wrapper = shallow(<FlexCell>{childProp}</FlexCell>);
    expect(wrapper.find(baseElementSelector)).to.have.text(childProp);
  });

  it('Renders center prop', () => {
    const wrapper = shallow(<FlexCell center />);
    expect(wrapper.find(baseElementSelector)).to.have.className(determineElementClass(testClassList().center));
  });

  it('Renders centerH prop', () => {
    const wrapper = shallow(<FlexCell centerH />);
    expect(wrapper.find(baseElementSelector)).to.have.className(determineElementClass(testClassList().centerH));
  });

  it('Renders centerV prop', () => {
    const wrapper = shallow(<FlexCell centerV />);
    expect(wrapper.find(baseElementSelector)).to.have.className(determineElementClass(testClassList().centerV));
  });

  it('Renders startH prop', () => {
    const wrapper = shallow(<FlexCell startH />);
    expect(wrapper.find(baseElementSelector)).to.have.className(determineElementClass(testClassList().startH));
  });

  it('Renders endH prop', () => {
    const wrapper = shallow(<FlexCell endH />);
    expect(wrapper.find(baseElementSelector)).to.have.className(determineElementClass(testClassList().endH));
  });

  it('Renders startV prop', () => {
    const wrapper = shallow(<FlexCell startV />);
    expect(wrapper.find(baseElementSelector)).to.have.className(determineElementClass(testClassList().startV));
  });

  it('Renders endV prop', () => {
    const wrapper = shallow(<FlexCell endV />);
    expect(wrapper.find(baseElementSelector)).to.have.className(determineElementClass(testClassList().endV));
  });

  it('Renders spaceAround prop', () => {
    const wrapper = shallow(<FlexCell spaceAround />);
    expect(wrapper.find(baseElementSelector)).to.have.className(determineElementClass(testClassList().spaceAround));
  });

  it('Renders spaceBetween prop', () => {
    const wrapper = shallow(<FlexCell spaceBetween />);
    expect(wrapper.find(baseElementSelector)).to.have.className(determineElementClass(testClassList().spaceBetween));
  });

  it('Renders grow prop', () => {
    const wrapper = shallow(<FlexCell grow={2} />);
    expect(wrapper.find(baseElementSelector)).to.have.className(determineElementClass(testClassList(2).grow));
  });

  it('Renders shrink prop', () => {
    const wrapper = shallow(<FlexCell shrink />);
    expect(wrapper.find(baseElementSelector)).to.have.className(determineElementClass(testClassList().shrink));
  });

  it('Renders ellipsis prop', () => {
    const wrapper = shallow(<FlexCell ellipsis />);
    expect(wrapper.find(baseElementSelector)).to.have.className(determineElementClass(testClassList().ellipsis));
  });

  it('Renders noMargin prop', () => {
    const wrapper = shallow(<FlexCell noMargin />);
    expect(wrapper.find(baseElementSelector)).to.have.className(determineElementClass(testClassList().noMargin));
  });
});
