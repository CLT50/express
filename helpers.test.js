const {
  findMean,
  findMedian,
  findMode,
} = require("./helpers");

describe("#findMedian", function(){
  it("finds the median of an even set", function(){ 
    expect(findMedian([1, 2, 3, 4])).toEqual(2.5)
  })
  it("finds the median of an odd set", function () { 
    expect(findMedian([1, 2, 3])).toEqual(2)
  })
})

describe("#findMean", function () {
  it("finds the mean of an empty array", function () { 
    expect(findMean([])).toEqual(0)
  })
  it("finds the mean of an array of numbers", function () { 
    expect(findMean([1,2,3,4])).toEqual(2.5)
  })
})

describe("#findMode", function () {
  it("finds the mode", function () { 
    expect(findMode([3,3,3,3,5,8])).toEqual(3)
  })
})