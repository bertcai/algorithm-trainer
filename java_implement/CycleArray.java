public class CycleArray<T> {
  private T[] arr;
  private int start;
  private int end;
  private int size;
  private int count;

  public CycleArray() {
    this(1);
  }

  @SuppressWarnings("unchecked")
  public CycleArray(int size) {
    this.size = size;
    this.count = 0;
    this.arr = (T[]) new Object[size];
    this.start = 0;
    this.end = 0;
  }

  @SuppressWarnings("unchecked")
  private void resize(int newSize) {
    T[] newArr = (T[]) new Object[newSize];
    for (int i = 0; i < count; i++) {
      newArr[i] = arr[(start + i) % size];
    }
    arr = newArr;
    start = 0;
    end = count;
    size = newSize;
  }

  private boolean isFull() {
    return size == count;
  }

  public void addFirst(T val) {
    if (isFull()) {
      resize(size * 2);
    }
    start = (start - 1 + size) % size;
    arr[start] = val;
    count++;
  }

  private boolean isEmpty() {
    return count == 0;
  }

  public T removeFirst() {
    if (isEmpty()) {
      throw new IllegalStateException("Array is empty");
    }
    T res = arr[start];
    arr[start] = null;
    start = (start + 1) % size;
    count--;
    if (count > 0 && count <= size / 4) {
      resize(size / 2);
    }
    return res;
  }

  public void addLast(T val) {
    if (isFull()) {
      resize(size * 2);
    }
    arr[end] = val;
    end = (end + 1) % size;
    count++;
  }

  public T removeLast() {
    if (isEmpty()) {
      throw new IllegalStateException("Array is empty");
    }
    end = (end - 1 + size) % size;
    T res = arr[end];
    arr[end] = null;
    count--;
    if (count > 0 && count <= size / 4) {
      resize(size / 2);
    }
    return res;
  }

  public T getFirst() {
    if (isEmpty()) {
      throw new IllegalStateException("Array is empty");
    }
    return arr[start % size];
  }

  public T getLast() {
    if (isEmpty()) {
      throw new IllegalStateException("Array is empty");
    }
    return arr[(end - 1 + size) % size];
  }

  public int size() {
    return count;
  }

  public void print() {
    for (int i = 0; i < count; i++) {
      System.out.print(arr[(start + i) % size] + " ");
    }
    System.out.println();
  }

  public static void main(String[] args) {
    CycleArray<Integer> cycleArray = new CycleArray<>(3);

    // 测试添加元素
    cycleArray.addLast(1);
    cycleArray.addLast(2);
    cycleArray.addLast(3);
    System.out.println("After adding 3 elements: ");
    cycleArray.print();

    // 测试添加到头部
    cycleArray.addFirst(0);
    System.out.println("After adding 0 at the head: ");
    cycleArray.print();

    // 测试删除尾部元素
    cycleArray.removeLast();
    System.out.println("After removing the last element: ");
    cycleArray.print();

    // 测试删除头部元素
    cycleArray.removeFirst();
    System.out.println("After removing the first element: ");
    cycleArray.print();

    // 测试获取头部和尾部元素
    System.out.println("First element: " + cycleArray.getFirst());
    System.out.println("Last element: " + cycleArray.getLast());

    // 测试数组扩容
    cycleArray.addLast(4);
    cycleArray.addLast(5);
    cycleArray.addLast(6);
    System.out.println("After adding more elements to trigger resize: ");
    cycleArray.print();

    // 测试数组缩容
    cycleArray.removeFirst();
    cycleArray.removeFirst();
    cycleArray.removeFirst();
    System.out.println("After removing elements to trigger resize: ");
    cycleArray.print();
  }
}
