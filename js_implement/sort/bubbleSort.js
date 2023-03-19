"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = void 0;
var bubbleSort = function (arr, n) {
    var temp;
    for (var i = 0; i < n; i++) {
        var swap = false;
        for (var j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swap = true;
            }
        }
        if (!swap) {
            break;
        }
    }
};
exports.bubbleSort = bubbleSort;
