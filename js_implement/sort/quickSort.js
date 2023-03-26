"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quickSort3Ways = exports.quickSort = void 0;
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
    if (r - l <= 15) { // 当区间长度小于等于 15 时，使用插入排序
        (0, insertionSort_1.insertionSort)(arr, l, r);
        return;
    }
    var p = __partition2(arr, l, r); // 将区间 [l, r] 分为两个部分
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
var __partition2 = function (arr, l, r) {
    var _a, _b, _c;
    var randomIndex = Math.floor(Math.random() * (r - l + 1)) + l;
    _a = [arr[randomIndex], arr[l]], arr[l] = _a[0], arr[randomIndex] = _a[1]; // 将中轴元素与 l 处的元素交换位置
    var v = arr[l]; // 选取区间中的一个元素作为中轴元素
    var i = l + 1, j = r;
    while (true) {
        while (i <= r && arr[i] < v)
            i++;
        while (j >= l + 1 && arr[j] > v)
            j--;
        if (i > j)
            break;
        _b = [arr[j], arr[i]], arr[i] = _b[0], arr[j] = _b[1];
        i++;
        j--;
    }
    _c = [arr[j], arr[l]], arr[l] = _c[0], arr[j] = _c[1]; // 将中轴元素与 j 处的元素交换位置
    return j; // 返回中轴元素的下标
};
var quickSort3Ways = function (arr, n) {
    __quickSort3Ways(arr, 0, n - 1);
};
exports.quickSort3Ways = quickSort3Ways;
var __quickSort3Ways = function (arr, l, r) {
    if (r - l <= 15) { // 当区间长度小于等于 15 时，使用插入排序
        (0, insertionSort_1.insertionSort)(arr, l, r);
        return;
    }
    var _a = __partition3(arr, l, r), lt = _a[0], gt = _a[1]; // 将区间 [l, r] 分为三个部分
    __quickSort3Ways(arr, l, lt - 1); // 分别对左中右三部分进行递归
    __quickSort3Ways(arr, gt, r);
};
var __partition3 = function (arr, l, r) {
    var _a, _b, _c, _d;
    var randomIndex = Math.floor(Math.random() * (r - l + 1)) + l;
    _a = [arr[randomIndex], arr[l]], arr[l] = _a[0], arr[randomIndex] = _a[1]; // 将中轴元素与 l 处的元素交换位置
    var v = arr[l]; // 选取区间中的一个元素作为中轴元素
    var lt = l, gt = r + 1, i = l + 1;
    while (i < gt) {
        if (arr[i] < v) {
            _b = [arr[lt + 1], arr[i]], arr[i] = _b[0], arr[lt + 1] = _b[1];
            lt++;
            i++;
        }
        else if (arr[i] > v) {
            _c = [arr[gt - 1], arr[i]], arr[i] = _c[0], arr[gt - 1] = _c[1];
            gt--;
        }
        else {
            i++;
        }
    }
    _d = [arr[lt], arr[l]], arr[l] = _d[0], arr[lt] = _d[1]; // 将中轴元素与 lt 处的元素交换位置
    return [lt, gt]; // 返回中轴元素的下标
};
