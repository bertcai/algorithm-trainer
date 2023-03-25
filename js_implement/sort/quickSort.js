"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSort = void 0;
var insertionSort_1 = require("./insertionSort");
/**
 * 对泛型数组 arr 进行快速排序
 * @param arr 待排序的数组
 * @param n 数组长度
 */
var quickSort = function (arr, n) {
    __quickSort(arr, 0, n - 1);
};
exports.quickSort = quickSort;
/**
 * 快速排序辅助函数
 * @param arr 待排序的数组
 * @param l 数组左边界
 * @param r 数组右边界
 */
var __quickSort = function (arr, l, r) {
    if (r - l <= 100000) { // 当区间长度小于等于 15 时，使用插入排序
        (0, insertionSort_1.insertionSort)(arr, l, r);
        return;
    }
    var p = __partition(arr, l, r); // 将区间 [l, r] 分为两个部分
    __quickSort(arr, l, p - 1); // 分别对左右两部分进行递归
    __quickSort(arr, p + 1, r);
};
/**
 * 快速排序核心代码：将区间 [l, r] 分为两个部分
 * @param arr 待排序的数组
 * @param l 区间左端点
 * @param r 区间右端点
 * @returns 返回分割后中轴元素的下标
 */
var __partition = function (arr, l, r) {
    var _a, _b;
    var randomIndex = Math.floor(Math.random() * (r - l + 1)) + l;
    var v = arr[randomIndex]; // 选取区间中的一个元素作为中轴元素
    var j = l; // 初始化 j 指向区间左边界
    for (var i = l + 1; i <= r; i++) { // i 从区间左边界的下一个元素开始扫描
        if (arr[i] < v) { // 如果当前元素小于中轴元素，将其与 j+1 处的元素交换位置
            _a = [arr[i], arr[j + 1]], arr[j + 1] = _a[0], arr[i] = _a[1];
            j++;
        }
    }
    _b = [arr[j], arr[l]], arr[l] = _b[0], arr[j] = _b[1]; // 将中轴元素与 j 处的元素交换位置 
    return j; // 返回中轴元素的下标
};
