/**
 * 循环数组, 左开右闭
 */
class CycleArray {
  constructor(size = 1) {
    this.size = size;
    this.array = [];
    this.start = 0;
    this.end = 0;
    this.count = 0;
  }

  resize(newSize) {
    let newArray = [];
    for (let i = 0; i < newSize; i++) {
      newArray.push(this.array[(this.start + i) % this.size]);
    }
    this.array = newArray;
    this.start = 0;
    this.end = this.count;
    this.size = newSize;
  }

  isFull() {
    return this.count === this.size;
  }

  isEmpty() {
    return this.count === 0;
  }

  addFirst(val) {
    if (this.isFull()) {
      this.resize(this.size * 2);
    }
    this.start = (this.start - 1 + this.size) % this.size;
    this.array[this.start] = val;
    this.count++;
  }

  removeFirst() {
    if (this.isEmpty()) {
      return null;
    }
    this.array[this.start] = null;
    this.start = (this.start + 1) % this.size;
    this.count--;
    if (this.count > 0 && this.count === this.size / 4) {
      this.resize(this.size / 2);
    }
  }

  addLast(val) {
    if (this.isFull()) {
      this.resize(this.size * 2);
    }
    this.array[this.end] = val;
    this.end = (this.end + 1) % this.size;
    this.count++;
  }

  removeLast() {
    if (this.isEmpty()) {
      return null;
    }
    this.end = (this.end - 1 + this.size) % this.size;
    this.array[this.end] = null;
    this.count--;
    if (this.count > 0 && this.count === this.size / 4) {
      this.resize(this.size / 2);
    }
  }

  getFirst() {
    if (this.isEmpty()) {
      return null;
    }
    return this.array[this.start];
  }

  getLast() {
    if (this.isEmpty()) {
      return null;
    }
    return this.array[(this.end - 1 + this.size) % this.size];
  }

  length() {
    return this.count;
  }
}

// 测试用例
const cycleArray = new CycleArray(3);

console.log(cycleArray.isEmpty()); // true

cycleArray.addLast(1);
cycleArray.addLast(2);
cycleArray.addLast(3);

console.log(cycleArray.isFull()); // true

console.log(cycleArray.getFirst()); // 1
console.log(cycleArray.getLast()); // 3

cycleArray.addFirst(0);
console.log(cycleArray.getFirst()); // 0

cycleArray.removeFirst();
console.log(cycleArray.getFirst()); // 1

cycleArray.removeLast();
console.log(cycleArray.getLast()); // 2

console.log(cycleArray.length()); // 2
