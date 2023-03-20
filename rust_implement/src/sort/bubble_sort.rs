pub fn bubble_sort(arr: &mut Vec<i32>) {
    let n = arr.len();
    for i in 1..n {
        let mut swapped = false;
        for j in 0..n - i {
            if arr[j] > arr[j + 1] {
                arr.swap(j, j + 1);
                swapped = true;
            }
        }
        if !swapped {
            break;
        }
    }
}
