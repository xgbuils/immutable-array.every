# immutable-array.every

[![travis ci][1]][2]
[![npm version][3]][4]
[![Coverage Status][5]][6]
[![Dependency Status][7]][8]

`immutable-array.every` provides a function that returns true if predicate returns `true` for all items of immutable array and `false` if not.

## Install

``` bash
$ npm install immutable-array.every --save
```

## Usage
``` javascript
const ImmutableArray = {
    of: require('immutable-array.of'),
    every: require('immutable-array.every')
}

const array = ImmutableArray.of([1, 2, 3, 4, 5]) // {array: [1, 2, 3, 4, 5], length: 5}
ImmutableArray.every(e => e <= 3, array) // false
ImmutableArray.every(e => e >= 1, array) // true
```

## Other related libraries
- [immutable-array.of]()
- [immutable-array.push]()
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
