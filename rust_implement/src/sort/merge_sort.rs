use super::insertion_sort::*;
pub fn merge_sort(arr: &mut Vec<i32>) {
    let n = arr.len();
    __merge_sort(arr, 0, n - 1);
}

pub fn merge_sort_bu(arr: &mut Vec<i32>) {
    let n = arr.len();
    for sz in 1..=n {
        for i in (0..n - sz).step_by(sz + sz) {
            if arr[i + sz - 1] > arr[i + sz] {
                __merge(arr, i, i + sz - 1, std::cmp::min(i + sz + sz - 1, n - 1));
            }
        }
    }
}

fn __merge_sort(arr: &mut Vec<i32>, l: usize, r: usize) {
    if l >= r {
        return;
    }
    if r - l <= 15 {
        insertion_sort_range(arr, l, r);
        return;
    }
    let mid = (l + r) / 2;
    __merge_sort(arr, l, mid);
    __merge_sort(arr, mid + 1, r);
    if arr[mid] > arr[mid + 1] {
        __merge(arr, l, mid, r);
    }
}

fn __merge(arr: &mut Vec<i32>, l: usize, mid: usize, r: usize) {
    let mut aux = vec![0; r - l + 1];
    aux.clone_from_slice(&arr[l..=r]);
    let mut i = l;
    let mut j = mid + 1;
    for k in l..=r {
        if i > mid {
            arr[k] = aux[j - l];
            j += 1;
        } else if j > r {
            arr[k] = aux[i - l];
            i += 1;
        } else if aux[i - l] > aux[j - l] {
            arr[k] = aux[j - l];
            j += 1;
        } else {
            arr[k] = aux[i - l];
            i += 1;
        }
    }
}
