[![Coverage Status](https://coveralls.io/repos/github/open-sauces/super-simple-flex-grid-react/badge.svg?branch=master)](https://coveralls.io/github/open-sauces/super-simple-flex-grid-react?branch=master) [![Build Status](https://travis-ci.org/open-sauces/super-simple-flex-grid-react.svg?branch=master)](https://travis-ci.org/open-sauces/super-simple-flex-grid-react)


# super-simple-flex-grid-react

A react implementation of the [Super Simple Flex Grid](https://github.com/open-sauces/super-simple-flex-grid)

**[Demo](https://open-sauces.github.io/super-simple-flex-grid-react/example/dist)**

### Installing
```sh
$ npm i super-simple-flex-grid
```

### Usage
```javascript
import { FlexRow as Row, FlexCell as Col } from 'node_modules/super-simple-flex-grid-react/FlexGrid';

const FlexGridExample = () => (
  <Row>
    <Col grow={2}>
      Col Grow 2
    </Col>
    <Col center customClass={exampleClass}>
      Center
    </Col>
    <Col grow={2}>
      Col Grow 2
    </Col>
  </Row>
);
```

### Options

##### GridRow
| Prop        | Type     | Description                     |
| ----------- | -------- | ------------------------------- |
| children    | any      | Child `<FlexCell />` components |
| customClass | `string` | Custom class                    |

##### GridCell
| Prop         | Type   | Description         | CSS                                                  |
| ------------ | -------| --------------------| ---------------------------------------------------- |
| children     | any    | content of cells    |                                                      |
| customClass  | `bool` | custom class        |                                                      |
| center       | `bool` | center              | `justify-content: center; align-items: center;`      |
| centerH      | `bool` | center horizontally | `justify-content: center`                            |
| centerV      | `bool` | center vertically   | `align-items: center`                                |
| startH       | `bool` | start horizontally  | `justify-content: flex-start`                        |
| endH         | `bool` | end horizontally    | `justify-content: flex-end`                          |
| startV       | `bool` | start vertically    | `align-items: flex-start`                            |
| endV         | `bool` | end vertically      | `align-items: flex-end`                              |
| spaceAround  | `bool` | space around        | `justify-content: space-around`                      |
| spaceBetween | `bool` | space between       | `justify-content: space-between`                     |
| grow         | `int`  | grow                | `flex-grow: x`                                       |
| shrink       | `bool` | shrink              | `flex-shrink: 1; flex-grow: 0; flex-basis: inherit;` |
| ellipsis     | `bool` | ellipse text        | `overflow: hidden` **[^1]**                          |
| noMargin     | `bool` | no margin           | `margin: 0 !important`                               |

**[^1]**  Ellipsis prop also adds a child `div` that contains the following CSS:
```scss
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
```

### Tech
Super-simple-flex-grid-react uses a number of open source projects:

* [Super-simple-flex-grid](https://github.com/open-sauces/super-simple-flex-grid) - super simple flex grid
* [React](https://facebook.github.io/react) - view library
* [Webpack](http://webpack.github.io) - module bundler
* [Babel](https://babeljs.io) - javaScript compiler
* [ESLint](http://eslint.org) - lint all the things
* Tesing
  * [Mocha](https://mochajs.org) - test framework
  * [Chai](http://chaijs.com) - testing assertion library
  * [Enzyme](https://github.com/airbnb/enzyme) - testing utility for React
  * [istanbul](https://istanbul.js.org) - test coverage generator


### Running the tests
```sh
$ npm test
```

License
----

MIT
