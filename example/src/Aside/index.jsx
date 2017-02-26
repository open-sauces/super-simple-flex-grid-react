import React from 'react';

import * as linksObj from '../consts/links';
import * as propsObj from '../consts/props';

import { FlexCell as Col } from '../../../src/FlexGrid';
import Links from './Links/Links';
import Props from './Props/Props';

import './Aside.scss';

const Aside = () => (
  <Col customClass="aside">
    <h1 className="aside__title">Super Simple Flex Grid React</h1>
    <Links description="Links" list={linksObj} />
    <Props description="Props" list={propsObj} />
  </Col>
);

export default Aside;
