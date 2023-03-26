use super::insertion_sort::*;
use rand::Rng;
pub fn quick_sort(arr: &mut Vec<i32>) {
    let n = arr.len();
    quick_sort_range(arr, 0, n - 1);
}

pub fn quick_sort_range(arr: &mut Vec<i32>, l: usize, r: usize) {
    if l >= r {
        return;
    }
    if r - l <= 15 {
        insertion_sort_range(arr, l, r);
        return;
    }
    let [lt, gt] = partition(arr, l, r);
    if lt == 0 {
        quick_sort_range(arr, gt, r);
        return;
    }
    quick_sort_range(arr, l, lt - 1);
    quick_sort_range(arr, gt, r);
}

pub fn partition(arr: &mut Vec<i32>, l: usize, r: usize) -> [usize; 2] {
    // 取arr随机一个数，放到最左边
    let idx = l + rand::thread_rng().gen_range(0..r - l + 1);
    arr.swap(idx, l);
    let v = arr[l];
    let mut lt = l;
    let mut gt = r + 1;
    let mut i = l + 1;
    while i < gt {
        if arr[i] < v {
            arr.swap(i, lt + 1);
            lt += 1;
            i += 1;
        } else if arr[i] > v {
            arr.swap(i, gt - 1);
            gt -= 1;
        } else {
            i += 1;
        }
    }
    arr.swap(l, lt);
    [lt, gt]
}
