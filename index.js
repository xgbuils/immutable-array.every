module.exports = function (predicate, immutableArray) {
    const {array, length} = immutableArray
    for (let index = 0; index < length; ++index) {
        if (!predicate(array[index])) {
            return false
        }
    }
    return true
}
