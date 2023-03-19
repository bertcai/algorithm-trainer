"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortHelper = void 0;
var SortHelper = function () {
    // 生成有n个元素的随机数组,每个元素的随机范围为[rangeL, rangeR]
    var genRandom = function (n, rangeL, rangeR) {
        console.assert(rangeL < rangeR);
        var arr = new Array(n);
        arr.fill(10);
        var b = arr.map(function (e) { return Math.random() * (rangeR - rangeL); });
        return b;
    };
    // 生成一个近乎有序数组，只交换了n次顺序
    var genNearlyOrdered = function (n, swapTimes) {
        var arr = new Array(n);
        for (var i = 0; i < n; i++) {
            arr[i] = i;
        }
        for (var i = 0; i < swapTimes; i++) {
            var posx = Math.floor(Math.random() * n);
            var posy = Math.floor(Math.random() * n);
            var temp = arr[posx];
            arr[posx] = arr[posy];
            arr[posy] = temp;
        }
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
        isSorted: isSorted,
        genNearlyOrdered: genNearlyOrdered
    };
};
exports.SortHelper = SortHelper;
