// 一个rust 选择排序示例

fn selection_sort<T: Ord>(arr: &mut [T]) {
    let len = arr.len();
    for i in 0..len {
        let mut min = i;
        for j in i + 1..len {
            if arr[j] < arr[min] {
                min = j;
            }
        }
        if min != i {
            arr.swap(i, min);
        }
    }
}

fn main() {
    let mut arr = [5, 4, 3, 2, 1];
    selection_sort(&mut arr);
    println!("{:?}", arr);
}
