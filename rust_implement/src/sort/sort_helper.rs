use rand::Rng;
use std::time::Instant;
// 用于生成一个随机数组
pub fn generate_random_array(n: usize, range_l: i32, range_r: i32) -> Vec<i32> {
    let mut arr = Vec::new();
    let mut rng = rand::thread_rng();
    for _ in 0..n {
        arr.push(rng.gen_range(range_l..range_r));
    }
    arr
}
// 生成一个近似有序的数组
pub fn generate_nearly_ordered_array(n: usize, swap_times: usize) -> Vec<i32> {
    let mut arr = Vec::new();
    for i in 0..n {
        arr.push(i as i32);
    }
    let mut rng = rand::thread_rng();
    for _ in 0..swap_times {
        let i = rng.gen_range(0..n);
        let j = rng.gen_range(0..n);
        arr.swap(i, j);
    }
    arr
}
// 用于测试排序算法的正确性
pub fn is_sorted(arr: &Vec<i32>) -> bool {
    for i in 0..arr.len() - 1 {
        if arr[i] > arr[i + 1] {
            return false;
        }
    }
    true
}
// 打印一个数组
pub fn print_array(arr: &Vec<i32>) {
    for i in 0..arr.len() {
        print!("{} ", arr[i]);
    }
    println!();
}
// 用于测试排序算法的性能
pub fn test_sort(sort_name: &str, sort: fn(&mut Vec<i32>), arr: &mut Vec<i32>) {
    let start_time = Instant::now();
    sort(arr);
    let end_time = Instant::now();
    assert!(is_sorted(arr));
    if arr.len() < 100 {
        print_array(arr);
    }
    println!(
        "{} : {} s",
        sort_name,
        end_time.duration_since(start_time).as_secs_f64()
    );
}
