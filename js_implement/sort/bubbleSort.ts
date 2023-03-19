export const bubbleSort = <T>(arr: T[], n: number) => {
    let temp: T
    for (let i = 0; i < n; i++) {
        let swap = false
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                swap = true
            }
        }
        if (!swap) {
            break
        }
    }
}