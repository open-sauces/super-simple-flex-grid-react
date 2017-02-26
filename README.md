[![Coverage Status](https://coveralls.io/repos/github/open-sauces/super-simple-flex-grid-react/badge.svg?branch=master)](https://coveralls.io/github/open-sauces/super-simple-flex-grid-react?branch=master) [![Build Status](https://travis-ci.org/open-sauces/super-simple-flex-grid-react.svg?branch=master)](https://travis-ci.org/open-sauces/super-simple-flex-grid-react)


# super-simple-flex-grid-react

A react implementation of the [Super Simple Flex Grid]

**[Demo]**

**[NPM]**

**[Github]**

### Installing
```sh
$ npm i super-simple-flex-grid-react
```

### Usage
```javascript
import { FlexRow as Row, FlexCell as Col } from 'node_modules/super-simple-flex-grid-react';

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
| Prop           | Type     | Description         | CSS                                                  |
| -------------- | ---------| --------------------| ---------------------------------------------------- |
| children       | any      | content of cells    |                                                      |
| [customClass]  | `string` | custom class        |                                                      |
| [center]       | `bool`   | center              | `justify-content: center; align-items: center;`      |
| [centerH]      | `bool`   | center horizontally | `justify-content: center`                            |
| [centerV]      | `bool`   | center vertically   | `align-items: center`                                |
| [startH]       | `bool`   | start horizontally  | `justify-content: flex-start`                        |
| [endH]         | `bool`   | end horizontally    | `justify-content: flex-end`                          |
| [startV]       | `bool`   | start vertically    | `align-items: flex-start`                            |
| [endV]         | `bool`   | end vertically      | `align-items: flex-end`                              |
| [spaceAround]  | `bool`   | space around        | `justify-content: space-around`                      |
| [spaceBetween] | `bool`   | space between       | `justify-content: space-between`                     |
| [shrink]       | `bool`   | shrink              | `flex-shrink: 1; flex-grow: 0; flex-basis: inherit;` |
| [noMargin]     | `bool`   | no margin           | `margin: 0 !important`                               |
| [grow]         | `int`    | grow                | `flex-grow: x`                                       |
| [ellipsis]     | `bool`   | ellipse text        | `overflow: hidden` **[^1]**                          |

**[^1]**  Ellipsis prop also adds a child `div` that contains the following CSS:
```scss
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
```

### Tech
Super-simple-flex-grid-react uses a number of open source projects:

* [Super-simple-flex-grid] - super simple flex grid
* [React] - view library
* [Webpack] - module bundler
* [Babel] - javaScript compiler
* [ESLint] - lint all the things
* Tesing
  * [Mocha] - test framework
  * [Chai] - testing assertion library
  * [Enzyme] - testing utility for React
  * [istanbul] - test coverage generator


### Running the tests
```sh
$ npm test
```

License
----

MIT

[Demo]: <https://open-sauces.github.io/super-simple-flex-grid-react/example/dist>
[NPM]: <https://www.npmjs.com/package/super-simple-flex-grid-react>
[Github]: <https://open-sauces.github.io/super-simple-flex-grid-react>


[customClass]: <https://open-sauces.github.io/super-simple-flex-grid-react/example/dist/#customClass>
[center]: <https://open-sauces.github.io/super-simple-flex-grid-react/example/dist/#center>
[centerH]: <https://open-sauces.github.io/super-simple-flex-grid-react/example/dist/#centerH>
[centerV]: <https://open-sauces.github.io/super-simple-flex-grid-react/example/dist/#centerV>
[startH]: <https://open-sauces.github.io/super-simple-flex-grid-react/example/dist/#startH>
[endH]: <https://open-sauces.github.io/super-simple-flex-grid-react/example/dist/#endH>
[startV]: <https://open-sauces.github.io/super-simple-flex-grid-react/example/dist/#startV>
[endV]: <https://open-sauces.github.io/super-simple-flex-grid-react/example/dist/#endV>
[spaceAround]: <https://open-sauces.github.io/super-simple-flex-grid-react/example/dist/#spaceAround>
[spaceBetween]: <https://open-sauces.github.io/super-simple-flex-grid-react/example/dist/#spaceBetween>
[grow]: <https://open-sauces.github.io/super-simple-flex-grid-react/example/dist/#grow>
[shrink]: <https://open-sauces.github.io/super-simple-flex-grid-react/example/dist/#shrink>
[ellipsis]: <https://open-sauces.github.io/super-simple-flex-grid-react/example/dist/#ellipsis>
[noMargin]: <https://open-sauces.github.io/super-simple-flex-grid-react/example/dist/#noMargin>


[Super simple flex grid]: <https://github.com/open-sauces/super-simple-flex-grid>
[React]: <https://facebook.github.io/react>
[Webpack]: <http://webpack.github.io>
[Babel]: <https://babeljs.io>
[ESLint]: <http://eslint.org>
[Mocha]: <https://mochajs.org>
[Chai]: <http://chaijs.com>
[Enzyme]: <https://github.com/airbnb/enzyme>
[istanbul]: <https://istanbul.js.org>
