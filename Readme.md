## 算法

由于最近同时在学习rust，所以一般会有rust和js两种实现，rust在`rust_implement`文件夹下，js在`js_implement`文件夹下。

### 排序

#### n^2 排序

+ 选择排序
+ 插入排序
    1. 第二次循环可以提前结束
    2. 第二次循环的swap操作可以优化，不需要每次都swap，只需要在最后一次swap即可
    3. 再排序近似有序的数组时，插入排序的效率会很高
+ 冒泡排序
    1. 第j次循环时，如果没有发生交换，说明数组已经有序，可以提前结束
    2. 提前中止条件并不容易触发，实际不如插入排序快
+ 希尔排序
    1. 将数组分为h个子数组，对每个子数组进行插入排序
    2. 合并子数组后，将子数组的个数减少，再次进行插入排序
    3. 重复上述步骤，直到子数组的个数为1
    4. 此时数组已经基本有序，再进行一次插入排序，效率会很高
    ```js
    const shellSort = (arr,n){
        let h = 1;
        while(h<n/3){
            h = 3*h+1;
        }
        while(h>=1){
            for(let i=h;i<n;i++){
                for(let j=i;j>=h&&arr[j]<arr[j-h];j-=h){
                    swap(arr,j,j-h);
                }
            }
            h = Math.floor(h/3);
        }
    }
    ``` 

```bash
# 一次运行结果 n = 10022
    Finished dev [unoptimized + debuginfo] target(s) in 0.21s
     Running `target/debug/rust_implement`
Selection Sort : 0.978031316 s
Insertion Sort : 0.619047148 s
Bubble Sort : 1.25344893 s
Shell Sort : 0.00564654 s
```

#### nlogn 排序

+ 归并排序
    + 递归思路
        + ```js
            const mergeSort = (arr,n)=>{
                __mergeSort(arr,0,n-1);
            }
            const __mergeSort = (arr,l,r)=>{
                if(l>=r){
                    return;
                }
                let mid = Math.floor((l+r)/2);
                __mergeSort(arr,l,mid);
                __mergeSort(arr,mid+1,r);
                __merge(arr,l,mid,r);
            }
            ```
        + 优化
            + 对于小规模数组，使用插入排序
            + 对于arr[mid]<=arr[mid+1]的情况，不进行merge，因为此时数组已经有序
            + 对于arr[mid]>arr[mid+1]的情况，进行merge
    + 非递归思路，也可以使用递归思路的优化
        + ```js
            const mergeSort = (arr,n)=>{
                for(let sz=1;sz<=n;sz+=sz){
                    for(let i=0;i+sz<n;i+=sz+sz){
                        __merge(arr,i,i+sz-1,Math.min(i+sz+sz-1,n-1));
                    }
                }
            }
            ```