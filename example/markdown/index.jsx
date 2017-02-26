import React from 'react';
import { FlexRow as Row, FlexCell as Col } from '../../src/FlexGrid';

import './theme-one-light.css';
import './theme-overrides.scss';

const Markdown = (props) => {
  const html = {
    __html: props.html,
  };

  return (
    <Row>
      <Col centerV customClass="markdown"><article dangerouslySetInnerHTML={html} /></Col>
    </Row>
  );
};

Markdown.propTypes = {
  html: React.PropTypes.string,
};

export default Markdown;
