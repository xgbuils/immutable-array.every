# immutable-array.every

[![travis ci][1]][2]
[![npm version][3]][4]
[![Coverage Status][5]][6]
[![Dependency Status][7]][8]

`immutable-array.every` provides a function that returns the concatenation of an immutable array with an item.

## Install

``` bash
$ npm install immutable-array.every --save
```

## Usage
``` javascript
const ImmutableArray = {
    of: require('immutable-array.of'),
    push: require('immutable-array.every')
}

const a = ImmutableArray.of([1, 2, 3, 4, 5]) // {array: [1, 2, 3, 4, 5], length: 5}
const b = ImmutableArray.push(6, a) // {array: [1, 2, 3, 4, 5, 6], length: 6}
a // {array: [1, 2, 3, 4, 5, 6], length: 5}
```

## Other related libraries
- [immutable-array.of]()
- [immutable-array.every]()
- [immutable-array.reduce]()
- [immutable-array.findIndexFrom]()

## Support
- Node.js >=6
- ES2015 transpilers

## License
MIT

  [1]: https://travis-ci.org/xgbuils/immutable-array.every.svg?branch=master
  [2]: https://travis-ci.org/xgbuils/immutable-array.every
  [3]: https://badge.fury.io/js/immutable-array.every.svg
  [4]: https://badge.fury.io/js/immutable-array.every
  [5]: https://coveralls.io/repos/github/xgbuils/immutable-array.every/badge.svg?branch=master
  [6]: https://coveralls.io/github/xgbuils/immutable-array.every?branch=master
  [7]: https://david-dm.org/xgbuils/immutable-array.every.svg
  [8]: https://david-dm.org/xgbuils/immutable-array.every
