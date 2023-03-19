
export const insertionSort = <T>(arr: T[], n: number) => {
    for (let i = 0; i < n; i++) {
        let temp: T = arr[i]
        let j: number
        for (j = i; j > 0 && arr[j - 1] > temp; j--) {
            arr[j] = arr[j - 1]
        }
        arr[j] = temp
    }
}