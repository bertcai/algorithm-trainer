"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertionSort = void 0;
var insertionSort = function (arr, n) {
    for (var i = 0; i < n; i++) {
        var temp = arr[i];
        var j = void 0;
        for (j = i; j > 0 && arr[j - 1] > temp; j--) {
            arr[j] = arr[j - 1];
        }
        arr[j] = temp;
    }
};
exports.insertionSort = insertionSort;
