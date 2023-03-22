pub fn insertion_sort(arr: &mut Vec<i32>) {
    let n = arr.len();
    for i in 1..n {
        let e = arr[i];
        for j in (0..i).rev() {
            if arr[j] > e {
                arr[j + 1] = arr[j];
            } else {
                arr[j + 1] = e;
                break;
            }
        }
    }
}

pub fn insertion_sort_range(arr: &mut Vec<i32>, l: usize, r: usize) {
    for i in l..r + 1 {
        let e = arr[i];
        for j in (l..i).rev() {
            if arr[j] > e {
                arr[j + 1] = arr[j];
            } else {
                arr[j + 1] = e;
                break;
            }
        }
    }
}
