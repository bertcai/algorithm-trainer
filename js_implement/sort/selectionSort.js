"use strict";
exports.__esModule = true;
var sortHelper_1 = require("./sortHelper");
var temp = NaN;
var selectionSort = function (arr, n) {
    for (var i = 0; i < n; i++) {
        var minIndex = i;
        for (var j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
};
var helper = (0, sortHelper_1.SortHelper)();
var n = 100000;
var arr = helper.genRandom(n, 0, 100000);
selectionSort(arr, n);
helper.testSort('selectionSort', selectionSort, arr, n);
