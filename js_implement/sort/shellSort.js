"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shellSort = void 0;
var shellSort = function (arr, n) {
    var h = 1;
    while (h < n / 3) {
        h = 3 * h + 1;
    }
    while (h >= 1) {
        for (var i = h; i < n; i++) {
            var temp = arr[i];
            var j = void 0;
            for (j = i; j >= h && arr[j - h] > temp; j -= h) {
                arr[j] = arr[j - h];
            }
            arr[j] = temp;
        }
        h = Math.floor(h / 3);
    }
};
exports.shellSort = shellSort;
