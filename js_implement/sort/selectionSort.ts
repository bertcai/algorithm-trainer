export const selectionSort = <T>(arr: T[], n: number) => {
    let temp: T
    for (let i = 0; i < n; i++) {
        let minIndex = i
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
}