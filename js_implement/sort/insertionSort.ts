export function insertionSort<T>(arr: T[], n: number): void;
export function insertionSort<T>(arr: T[], l: number, r: number): void;
export function insertionSort<T>(arr: T[], arg2: number, arg3?: number): void {
    if (typeof arg3 === 'undefined') {
        const n = arg2;
        for (let i = 0; i < n; i++) {
            let temp: T = arr[i]
            let j: number
            for (j = i + 1; j > 0 && arr[j - 1] > temp; j--) {
                arr[j] = arr[j - 1]
            }
            arr[j] = temp
        }
    } else {
        const l = arg2;
        const r = arg3;
        for (let i = l; i <= r; i++) {
            let temp: T = arr[i]
            let j: number
            for (j = i + 1; j > l && arr[j - 1] > temp; j--) {
                arr[j] = arr[j - 1]
            }
            arr[j] = temp
        }
    }
}
