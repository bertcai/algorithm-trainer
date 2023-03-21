"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeSort = void 0;
var mergeSort = function (arr, n) {
    __mergeSort(arr, 0, n - 1);
};
exports.mergeSort = mergeSort;
var __mergeSort = function (arr, l, r) {
    if (l >= r) {
        return;
    }
    var mid = Math.floor((l + r) / 2);
    __mergeSort(arr, l, mid);
    __mergeSort(arr, mid + 1, r);
    __merge(arr, l, mid, r);
};
var __merge = function (arr, l, mid, r) {
    var aux = [];
    for (var i_1 = l; i_1 <= r; i_1++) {
        aux[i_1 - l] = arr[i_1];
    }
    var i = l, j = mid + 1;
    for (var k = l; k <= r; k++) {
        if (i > mid) {
            arr[k] = aux[j - l];
            j++;
        }
        else if (j > r) {
            arr[k] = aux[i - l];
            i++;
        }
        else if (aux[i - l] > aux[j - l]) {
            arr[k] = aux[j - l];
            j++;
        }
        else {
            arr[k] = aux[i - l];
            i++;
        }
    }
};
