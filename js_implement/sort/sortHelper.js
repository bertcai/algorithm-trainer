"use strict";
exports.__esModule = true;
exports.SortHelper = void 0;
var SortHelper = function () {
    // 生成有n个元素的随机数组,每个元素的随机范围为[rangeL, rangeR]
    var genRandom = function (n, rangeL, rangeR) {
        console.assert(rangeL < rangeR);
        var arr = new Array(n);
        arr.map(function () {
            return Math.random() * (rangeR - rangeL);
        });
        return arr;
    };
    // 判断arr数组是否有序
    var isSorted = function (arr, n) {
        for (var i = 0; i < n - 1; i++) {
            if (arr[i + 1] < arr[i]) {
                return false;
            }
        }
        return true;
    };
    // 测试sort排序算法排序arr数组所得到结果的正确性和算法运行时间
    var testSort = function (sortName, sort, arr, n) {
        var start = new Date().getTime();
        sort(arr, n);
        var end = new Date().getTime();
        console.assert(isSorted(arr, n));
        console.log("".concat(sortName, ": ").concat(end - start));
    };
    return {
        genRandom: genRandom,
        testSort: testSort,
        isSorted: isSorted
    };
};
exports.SortHelper = SortHelper;
