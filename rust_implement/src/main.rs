use mylib::sort::bubble_sort::*;
use mylib::sort::insertion_sort::*;
use mylib::sort::merge_sort::*;
use mylib::sort::selection_sort::*;
use mylib::sort::shell_sort::*;
use mylib::sort::sort_helper::*;
fn main() {
    let n = 15000;
    let range_l = 0;
    let range_r = 1000;
    let mut arr = generate_random_array(n, range_l, range_r);
    let mut arr2 = arr.clone();
    let mut arr3 = arr.clone();
    let mut arr4 = arr.clone();
    let mut arr5 = arr.clone();
    if arr.len() < 100 {
        print_array(&arr);
    }
    test_sort("Selection Sort", selection_sort, &mut arr);
    test_sort("Insertion Sort", insertion_sort, &mut arr2);
    test_sort("Bubble Sort", bubble_sort, &mut arr3);
    test_sort("Shell Sort", shell_sort, &mut arr4);
    test_sort("Merge Sort", merge_sort, &mut arr5);
}
