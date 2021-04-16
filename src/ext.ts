Array.prototype.remove = function (e) {
    let index = this.indexOf(e)
    if (index != -1) {
        return this.splice(index, 1)[0]
    }
    return null
}

Object.defineProperty(Array.prototype, 'first', {
    get: function() {
        return this.length > 0 ? this[0] : null
    }
})

Object.defineProperty(Array.prototype, 'last', {
    get: function() {
        return this.length > 0 ? this[this.length-1] : null
    }
})
