
let temp: any = NaN
export const insertionSort = <T>(arr: T[], n: number) => {
    for (let i = 0; i < n; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                temp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = temp
            } else {
                break
            }
        }
    }
}