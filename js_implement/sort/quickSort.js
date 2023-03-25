"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSort = void 0;
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
    if (l >= r) {
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
    var v = arr[l]; // 选择第一个元素作为中轴元素
    var j = l; // 初始化 j 指向区间左边界
    for (var i = l + 1; i <= r; i++) { // i 从区间左边界的下一个元素开始扫描
        if (arr[i] < v) { // 如果当前元素小于中轴元素，将其与 j+1 处的元素交换位置
            var temp_1 = arr[j + 1];
            arr[j + 1] = arr[i];
            arr[i] = temp_1;
            j++;
        }
    }
    var temp = arr[j]; // 将中轴元素放到 j 的位置上
    arr[j] = arr[l];
    arr[l] = temp;
    return j; // 返回中轴元素的下标
};
