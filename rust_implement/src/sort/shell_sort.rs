pub fn shell_sort(arr: &mut Vec<i32>) {
    let n = arr.len();
    let mut h = 1;
    while h < n / 3 {
        h = 3 * h + 1;
    }
    while h >= 1 {
        for i in h..n {
            let e = arr[i];
            let mut j = i;
            while j >= h && arr[j - h] > e {
                arr[j] = arr[j - h];
                j -= h;
            }
            arr[j] = e;
        }
        h = h / 3;
    }
}
