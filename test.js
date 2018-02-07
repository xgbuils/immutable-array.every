const test = require('tape')
const tapSpec = require('tap-spec')

const arrayOf = require('immutable-array.of')
const push = require('immutable-array.push')
const every = require('./')

const array = Object.freeze([1, 2, 3, 4, 5])

test('.every', function (t) {
    t.test('empty array', function (st) {
        const list = arrayOf([])
        const result = every(() => false, list)
        st.equal(result, true, 'it always returns true')
        st.end()
    })
    t.test('if predicate returns false for some item', function (st) {
        const list = arrayOf(array)
        const result = every(e => e <= 3, list)
        st.equal(result, false, 'it returns false')
        st.end()
    })
    t.test('if predicate returns true for all items', function (st) {
        const list = arrayOf(array)
        const result = every(e => e >= 0, list)
        st.equal(result, true, 'it returns false')
        st.end()
    })
    t.test('if predicate returns false for some item and array.length !== list.length', function (st) {
        const list = arrayOf(array)
        push(-3, push(-5, list))
        const result = every(e => e <= 3, list)
        st.equal(result, false, 'it behaves considering list.length')
        st.end()
    })
    t.test('if predicate returns true for all items', function (st) {
        const list = arrayOf(array)
        push(-3, push(-5, list))
        const result = every(e => e >= 0, list)
        st.equal(result, true, 'it behaves considering list.length')
        st.end()
    })

    t.end()
})

test.createStream()
    .pipe(tapSpec())
    .pipe(process.stdout)
