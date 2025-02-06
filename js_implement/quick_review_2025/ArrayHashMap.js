class Node {
  constructor() {
    this.key = null;
    this.value = null;
    this.index = null;
  }
}

class ArrayHashMap {
  constructor() {
    this.map = new Map();
    this.array = [];
    this.count = 0;
  }

  put(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key)
      node.value = value
    } else {
      const node = new Node()
      node.key = key
      node.value = value
      node.index = this.count
      this.map.set(key, node)
      this.array.push(node)
      this.count++
    }
  }

  get(key) {
    if (this.map.has(key)) {
      return this.map.get(key).value
    }
  }

  remove(key) {
    if (!this.map.has(key)) {
      return null
    }

    if (this.count < 1) {
      return
    }

    const curNode = this.map.get(key)
    const tailNode = this.array[this.count - 1]
    this.array[curNode.index] = tailNode
    this.array.pop()
    this.count--
    tailNode.index = curNode.index
  }

  randomKey() {
    let randomIndex = Math.floor(Math.random() * this.count)
    return this.array[randomIndex].key
  }

  size() {
    return this.map.size;
  }

  log(){
    for (let index = 0; index < this.array.length; index++) {
      const node = this.array[index];
      console.log(node.key + ' -> ' + node.value);
    }
  }
}

let map = new ArrayHashMap();
map.put(1, 1);
map.put(2, 2);
map.put(3, 3);
map.put(4, 4);
map.put(5, 5);

console.log(map.get(1)); // 1
console.log(map.randomKey());

map.remove(2);
map.log()
console.log(map.randomKey());
console.log(map.randomKey());
