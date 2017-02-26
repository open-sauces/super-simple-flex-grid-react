import React from 'react';
import ReactDOM from 'react-dom';

import { FlexRow as Row, FlexCell as Col } from '../../src/FlexGrid';
import Markdown from '../markdown';
import Aside from './Aside';

import customClassMD from '../documentation/customClass.md';
import centerMD from '../documentation/center.md';
import centerHMD from '../documentation/centerH.md';
import centerVMD from '../documentation/centerV.md';
import startHMD from '../documentation/startH.md';
import endHMD from '../documentation/endH.md';
import startVMD from '../documentation/startV.md';
import endVMD from '../documentation/endV.md';
import spaceAroundMD from '../documentation/spaceAround.md';
import spaceBetweenMD from '../documentation/spaceBetween.md';
import shrink2ColMD from '../documentation/shrink2Col.md';
import shrink3ColMD from '../documentation/shrink3Col.md';
import col2MD from '../documentation/col2.md';
import noMarginMD from '../documentation/noMargin.md';
import grow2MD from '../documentation/grow2.md';
import grow0CustomClassMD from '../documentation/grow0CustomClass.md';
import ellipsisMD from '../documentation/ellipsis.md';
import ellipsisGrow2MD from '../documentation/ellipsisGrow2.md';
import ellipsisNoMarginMD from '../documentation/ellipsisNoMargin.md';

import './style.scss';

const FlexGridExample = () => {
  const customClass = 'custom-class';
  const customWidth = 'custom-width';
  const customWidth2 = 'custom-width2';
  const ellipsisText = 'Ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis ellipsis';
  const exampleClass = 'examples__example';

  return (
    <div>
      <Aside />
      <Row customClass="container">
        <Col customClass="examples">
          <div className={exampleClass} data-prop="customClass" id="customClass">
            <Row>
              <Col customClass={customClass} />
            </Row>
            <Markdown html={customClassMD} />
          </div>

          <div className={exampleClass} data-prop="center" id="center">
            <Row>
              <Col center />
            </Row>
            <Markdown html={centerMD} />
          </div>

          <div className={exampleClass} data-prop="centerH" id="centerH">
            <Row>
              <Col centerH />
            </Row>
            <Markdown html={centerHMD} />
          </div>

          <div className={exampleClass} data-prop="centerV" id="centerV">
            <Row>
              <Col centerV />
            </Row>
            <Markdown html={centerVMD} />
          </div>

          <div className={exampleClass} data-prop="startH" id="startH">
            <Row>
              <Col startH />
            </Row>
            <Markdown html={startHMD} />
          </div>

          <div className={exampleClass} data-prop="endH" id="endH">
            <Row>
              <Col endH />
            </Row>
            <Markdown html={endHMD} />
          </div>

          <div className={exampleClass} data-prop="startV" id="startV">
            <Row>
              <Col startV />
            </Row>
            <Markdown html={startVMD} />
          </div>

          <div className={exampleClass} data-prop="endV" id="endV">
            <Row>
              <Col endV />
            </Row>
            <Markdown html={endVMD} />
          </div>

          <div className={exampleClass} data-prop="spaceAround" id="spaceAround">
            <Row>
              <Col spaceAround />
            </Row>
            <Markdown html={spaceAroundMD} />
          </div>

          <div className={exampleClass} data-prop="spaceBetween" id="spaceBetween">
            <Row>
              <Col spaceBetween />
            </Row>
            <Markdown html={spaceBetweenMD} />
          </div>

          <div className={exampleClass} data-prop="shrink" id="shrink">
            <Row>
              <Col />
              <Col shrink />
            </Row>
            <Markdown html={shrink2ColMD} />
          </div>

          <div className={exampleClass} data-prop="shrink 2">
            <Row>
              <Col />
              <Col shrink />
              <Col />
            </Row>
            <Markdown html={shrink3ColMD} />
          </div>

          <div className={exampleClass}>
            <Row>
              <Col />
              <Col />
            </Row>
            <Markdown html={col2MD} />
          </div>

          <div className={exampleClass} data-prop="noMargin" id="noMargin">
            <Row>
              <Col noMargin />
              <Col noMargin />
              <Col />
            </Row>
            <Markdown html={noMarginMD} />
          </div>

          <div className={exampleClass} data-prop="grow" id="grow">
            <Row>
              <Col />
              <Col grow={2} />
              <Col />
              <Col />
            </Row>
            <Markdown html={grow2MD} />
          </div>

          <div className={exampleClass} data-prop="grow, customClass">
            <Row>
              <Col />
              <Col grow={0} customClass={customWidth} />
              <Col />
              <Col />
            </Row>
            <Markdown html={grow0CustomClassMD} />
          </div>

          <div className={exampleClass} data-prop="ellipsis" id="ellipsis">
            <Row>
              <Col ellipsis>{ellipsisText}</Col>
              <Col />
              <Col ellipsis>{ellipsisText}</Col>
            </Row>
            <Markdown html={ellipsisMD} />
          </div>

          <div className={exampleClass} data-prop="ellipsis, grow">
            <Row>
              <Col ellipsis grow={2}>{ellipsisText}</Col>
              <Col />
              <Col />
            </Row>
            <Markdown html={ellipsisGrow2MD} />
          </div>

          <div className={exampleClass} data-prop="ellipsis, noMargin, grow, customClass">
            <Row>
              <Col ellipsis noMargin>{ellipsisText}</Col>
              <Col ellipsis noMargin grow={0} customClass={customWidth2}>{ellipsisText}</Col>
            </Row>
            <Markdown html={ellipsisNoMarginMD} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

ReactDOM.render(<FlexGridExample />, document.getElementById('app'));
