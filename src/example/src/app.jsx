import React from 'react';
import ReactDOM from 'react-dom';

import { FlexRow, FlexCell } from '../../FlexGrid';
import './style.scss';

const FlexGridExample = () => {
  const exampleClass = 'example';
  const exampleDarkClass = 'example-dark';
  const exampleDarkCustomWidthClass = 'example-dark-custom-width';
  const exampleGrow0Class = 'example-grow0';
  const exampleEllipsisClass = 'example-ellipsis';

  return (
    <div>
      <h4>Regular examples</h4>
      <FlexRow>
        <FlexCell center customClass={exampleClass}>
          Center
        </FlexCell>
      </FlexRow>

      <FlexRow>
        <FlexCell centerH customClass={exampleClass}>
          Center H
        </FlexCell>
      </FlexRow>

      <FlexRow>
        <FlexCell centerV customClass={exampleClass}>
          Center V
        </FlexCell>
      </FlexRow>

      <FlexRow>
        <FlexCell startH customClass={exampleClass}>
          Start horizontal
        </FlexCell>
      </FlexRow>

      <FlexRow>
        <FlexCell endH customClass={exampleClass}>
          End horizontal
        </FlexCell>
      </FlexRow>

      <FlexRow>
        <FlexCell startV customClass={exampleClass}>
          Start vertical
        </FlexCell>
      </FlexRow>

      <FlexRow>
        <FlexCell endV customClass={exampleClass}>
          End vertical
        </FlexCell>
      </FlexRow>

      <FlexRow>
        <FlexCell spaceAround customClass={exampleClass}>
          <div>
            Space around
          </div>
          <div>
            Space around
          </div>
        </FlexCell>
      </FlexRow>

      <FlexRow>
        <FlexCell spaceBetween customClass={exampleClass}>
          <div>
            Space between
          </div>
          <div>
            Space
          </div>
        </FlexCell>
      </FlexRow>

      <FlexRow>
        <FlexCell customClass={exampleClass}>
          Cell grow
        </FlexCell>
        <FlexCell shrink customClass={exampleClass}>
          Cell shrink
        </FlexCell>
      </FlexRow>

      <FlexRow>
        <FlexCell customClass={exampleClass}>
          Cell grow
        </FlexCell>
        <FlexCell shrink customClass={exampleClass}>
          Cell shrink
        </FlexCell>
        <FlexCell customClass={exampleClass}>
          Cell grow
        </FlexCell>
      </FlexRow>

      <FlexRow>
        <FlexCell customClass={exampleClass}>
          Cell
        </FlexCell>
        <FlexCell customClass={exampleClass}>
          Cell more content
        </FlexCell>
      </FlexRow>

      <FlexRow>
        <FlexCell noMargin customClass={exampleClass}>
          Cell no margin
        </FlexCell>
        <FlexCell noMargin customClass={exampleClass}>
          Cell more content no margin
        </FlexCell>
      </FlexRow>

      <br />

      <FlexRow>
        <FlexCell customClass={exampleClass}>
          Cell
        </FlexCell>
        <FlexCell grow={2} customClass={exampleClass}>
          Cell Grow 2
        </FlexCell>
        <FlexCell customClass={exampleClass}>
          Cell
        </FlexCell>
        <FlexCell customClass={exampleClass}>
          Cell
        </FlexCell>
      </FlexRow>

      <FlexRow>
        <FlexCell customClass={exampleClass}>
          Cell
        </FlexCell>
        <FlexCell grow={0} customClass={exampleGrow0Class}>
          Cell with custom width
        </FlexCell>
        <FlexCell customClass={exampleClass}>
          Cell
        </FlexCell>
        <FlexCell customClass={exampleClass}>
          Cell
        </FlexCell>
      </FlexRow>

      <br />

      <h4>Ellipsis examples</h4>

      <FlexRow customClass={exampleEllipsisClass}>
        <FlexCell ellipsis customClass={exampleClass}>
          Cell with more content than can be displayed and ellipsis
        </FlexCell>
        <FlexCell ellipsis customClass={exampleClass}>
          Cell with more content than can be displayed and ellipsis
        </FlexCell>
      </FlexRow>

      <FlexRow customClass={exampleEllipsisClass}>
        <FlexCell ellipsis customClass={exampleClass}>
          Cell with more content than can be displayed and ellipsis
        </FlexCell>
        <FlexCell customClass={exampleDarkClass}>
          Cell
        </FlexCell>
      </FlexRow>

      <FlexRow customClass={exampleEllipsisClass}>
        <FlexCell ellipsis grow={2} customClass={exampleClass}>
          Cell with more content than can be displayed and ellipsis with grow
        </FlexCell>
        <FlexCell shrink customClass={exampleDarkClass}>
          Cell
        </FlexCell>
      </FlexRow>

      <FlexRow customClass={exampleEllipsisClass}>
        <FlexCell ellipsis customClass={exampleClass}>
          Cell with more content than can be displayed and ellipsis with grow
        </FlexCell>
        <FlexCell ellipsis grow={0} customClass={exampleDarkCustomWidthClass}>
          Cell with custom width
        </FlexCell>
      </FlexRow>

      <FlexRow customClass={exampleEllipsisClass}>
        <FlexCell ellipsis noMargin customClass={exampleClass}>
          Cell with more content than can be displayed and ellipsis with grow and no margin
        </FlexCell>
        <FlexCell ellipsis noMargin grow={0} customClass={exampleDarkCustomWidthClass}>
          Cell with custom width and no margin
        </FlexCell>
      </FlexRow>
    </div>
  );
};

ReactDOM.render(<FlexGridExample />, document.getElementById('app'));
