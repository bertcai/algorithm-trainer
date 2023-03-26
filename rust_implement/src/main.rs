use mylib::sort::bubble_sort::*;
use mylib::sort::insertion_sort::*;
use mylib::sort::merge_sort::*;
use mylib::sort::quick_sort::*;
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
    let mut arr6 = arr.clone();
    let mut arr7 = arr.clone();
    if arr.len() < 100 {
        print_array(&arr);
    }
    test_sort("Selection Sort", selection_sort, &mut arr);
    test_sort("Insertion Sort", insertion_sort, &mut arr2);
    test_sort("Bubble Sort", bubble_sort, &mut arr3);
    test_sort("Shell Sort", shell_sort, &mut arr4);
    test_sort("Merge Sort", merge_sort, &mut arr5);
    test_sort("Merge Sort BU", merge_sort_bu, &mut arr6);
    test_sort("Quick Sort", quick_sort, &mut arr7);

    let mut nearly_arr = generate_nearly_ordered_array(n, 100);
    let mut nearly_arr2 = nearly_arr.clone();
    let mut nearly_arr3 = nearly_arr.clone();
    test_sort("Merge Sort", merge_sort, &mut nearly_arr);
    test_sort("Merge Sort BU", merge_sort_bu, &mut nearly_arr2);
    test_sort("Quick Sort", quick_sort, &mut nearly_arr3);
}
