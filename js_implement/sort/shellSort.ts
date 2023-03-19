export const shellSort = <T>(arr: T[], n: number) => {
    let h = 1
    while (h < n / 3) {
        h = 3 * h + 1
    }
    while (h >= 1) {
        for (let i = h; i < n; i++) {
            let temp: T = arr[i]
            let j: number
            for (j = i; j >= h && arr[j - h] > temp; j -= h) {
                arr[j] = arr[j - h]
            }
            arr[j] = temp
        }
        h = Math.floor(h / 3)
    }
}