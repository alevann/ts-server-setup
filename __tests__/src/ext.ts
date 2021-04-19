it('should return the last element of the array',
() => {
    const arr = [0, 1, 2]
    expect(arr.last).toBe(2)
})

it('should return the first element of the array',
() => {
    const arr = [0, 1, 2]
    expect(arr.first).toBe(0)
})

it('should return the removed element from the array',
() => {
    const arr = [0, 1, 2]
    expect(arr.remove(1)).toBe(1)
})
