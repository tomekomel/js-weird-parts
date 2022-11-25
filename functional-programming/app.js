function mapEachElement(arr, fn) {
    var newArr = [];

    for(var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        );
    }

    return newArr;
}

var arr = [1, 2, 3];
console.log(arr);

var arr2 = mapEachElement(arr, function(item) {
    return item * 2;
});
console.log(arr2);

var arr3 = mapEachElement(arr, function(item) {
    return item > 2;
});
console.log(arr3);

var checkPastLimit = function(limiter, item) {
    return item > limiter;
}

// we need to preset one parameter
var arr4 = mapEachElement(arr, checkPastLimit.bind(this, 1));
console.log(arr4);

// limiter parameters are two different parameters here
var checkPastLimitSimplified = function (limiter) {
    return function (limiter, item) {
        return item > limiter;
    }.bind(limiter);
}

// we need to preset one parameter
var arr5 = mapEachElement(arr, checkPastLimit.bind(this, 2));
console.log(arr5);

var arr6 = _.map(arr, function (item) { return item * 3 });
console.log(arr6);

var arr7 = _.filter([1, 2, 3, 4, 5, 6, 7], function (item) { return item % 2 === 0 });
console.log(arr7);
