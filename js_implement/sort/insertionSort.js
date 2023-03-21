"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertionSort = void 0;
function insertionSort(arr, arg2, arg3) {
    if (typeof arg3 === 'undefined') {
        var n = arg2;
        for (var i = 0; i < n; i++) {
            var temp = arr[i];
            var j = void 0;
            for (j = i + 1; j > 0 && arr[j - 1] > temp; j--) {
                arr[j] = arr[j - 1];
            }
            arr[j] = temp;
        }
    }
    else {
        var l = arg2;
        var r = arg3;
        for (var i = l; i <= r; i++) {
            var temp = arr[i];
            var j = void 0;
            for (j = i + 1; j > l && arr[j - 1] > temp; j--) {
                arr[j] = arr[j - 1];
            }
            arr[j] = temp;
        }
    }
}
exports.insertionSort = insertionSort;
