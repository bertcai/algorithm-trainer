"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertionSort = void 0;
var temp = NaN;
var insertionSort = function (arr, n) {
    for (var i = 0; i < n; i++) {
        for (var j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
            else {
                break;
            }
        }
    }
};
exports.insertionSort = insertionSort;
