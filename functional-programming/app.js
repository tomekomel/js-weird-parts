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
