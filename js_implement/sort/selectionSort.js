"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectionSort = void 0;
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
exports.selectionSort = selectionSort;
