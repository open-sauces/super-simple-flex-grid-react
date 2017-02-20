import React from 'react';
import ReactDOM from 'react-dom';

import { FlexRow as Row, FlexCell as Col } from '../../src/FlexGrid';
import './style.scss';

const FlexGridExample = () => {
  const customWidth = 'custom-width';
  const customWidth2 = 'custom-width2';
  const ellipsisText = 'Ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis';

  return (
    <Row customClass="container">
      <Col customClass="examples">
        <Row>
          <Col center><span>center</span></Col>
        </Row>

        <Row>
          <Col centerH><span>centerH</span></Col>
        </Row>

        <Row>
          <Col centerV><span>centerV</span></Col>
        </Row>

        <Row>
          <Col startH><span>startH</span></Col>
        </Row>

        <Row>
          <Col endH><span>endH</span></Col>
        </Row>

        <Row>
          <Col startV><span>startV</span></Col>
        </Row>

        <Row>
          <Col endV><span>endV</span></Col>
        </Row>

        <Row>
          <Col spaceAround><span>spaceAround</span></Col>
        </Row>

        <Row>
          <Col spaceBetween><span>spaceBetween</span></Col>
        </Row>

        <Row>
          <Col />
          <Col shrink><span>shrink</span></Col>
        </Row>

        <Row>
          <Col />
          <Col shrink><span>shrink</span></Col>
          <Col />
        </Row>

        <Row>
          <Col />
          <Col />
        </Row>

        <Row>
          <Col noMargin><span>noMargin</span></Col>
          <Col noMargin><span>noMargin</span></Col>
          <Col />
        </Row>

        <Row>
          <Col />
          <Col grow={2}><span>grow2</span></Col>
          <Col />
          <Col />
        </Row>

        <Row>
          <Col />
          <Col grow={0} customClass={customWidth}><span>grow0 | customClass</span></Col>
          <Col />
          <Col />
        </Row>

        <Row>
          <Col ellipsis>
            {ellipsisText}
            <span>ellipsis</span>
          </Col>
          <Col />
          <Col ellipsis>
            {ellipsisText}
            <span>ellipsis</span>
          </Col>
        </Row>

        <Row>
          <Col ellipsis grow={2}>
            {ellipsisText}
            <span>ellipsis | grow2</span>
          </Col>
          <Col />
          <Col />
        </Row>

        <Row>
          <Col ellipsis noMargin>
            {ellipsisText}
            <span>ellipsis | noMargin</span>
          </Col>
          <Col ellipsis noMargin grow={0} customClass={customWidth2}>
            {ellipsisText}
            <span>ellipsis | noMargin | grow0 | customClass</span>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

ReactDOM.render(<FlexGridExample />, document.getElementById('app'));
