// 设计链表技巧，使用前置head和后置tail，实际链表的值在head和tail之间，这样在插入和删除时，不需要考虑边界情况

class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
  }
}

class LinkHashMap {
  constructor() {
    this.map = new Map()
    this.head = new Node(null)
    this.tail = new Node(null)
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  containsKey(key) {
    return this.map.has(key)
  }

  get(key) {
    if (this.containsKey(key)) {
      return this.map.get(key).value
    }
  }

  addToTail(node) {
    const temp = this.tail.prev
    temp.next = node
    node.prev = temp
    node.next = this.tail
    this.tail.prev = node
  }

  put(key, value) {
    if (this.containsKey(key)) {
      const node = this.map.get(key)
      node.value = value
    } else {
      const node = new Node(key, value)
      this.map.set(key, node)
      this.addToTail(node)
    }
  }

  remove(key) {
    if (this.containsKey(key)) {
      const node = this.map.get(key)
      node.prev.next = node.next
      node.next.prev = node.prev
      this.map.delete(key)
    } else {
      return null
    }
  }

  keys() {
    const keysList = []
    let cur = this.head.next
    while (cur !== this.tail) {
      keysList.push(cur.key)
      cur = cur.next
    }
    return keysList
  }

  log() {
    let cur = this.head.next
    while (cur !== this.tail) {
      console.log(cur.key + ' -> ' + cur.value)
      cur = cur.next
    }
  }
}

const map = new LinkHashMap();
map.put("a", 1);
map.put("b", 2);
map.put("c", 3);
map.put("d", 4);
map.put("e", 5);

console.log(map.keys()); // ['a', 'b', 'c', 'd', 'e']

map.remove("c");

console.log(map.keys()); // ['a', 'b', 'd', 'e']

map.put("a", 9)
map.log()