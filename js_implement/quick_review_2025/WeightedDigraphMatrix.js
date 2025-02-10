class WeightedDigraphMatrix {
  constructor(n) {
    this.graph = Array.from({ length: n }, () => Array(n).fill(0))
  }

  addEdge(from, to, weight) {
    this.graph[from][to] = weight
  }

  removeEdge(from, to) {
    this.graph[from][to] = 0
  }

  hasEdge(from, to) {
    return this.graph[from][to] !== 0
  }

  weight(from, to) {
    return this.graph[from][to] ? this.graph[from][to] : 'no such edge'
  }

  neighbors(from) {
    const res = []
    for (let to = 0; to < this.graph[from].length; to++) {
      if (this.graph[from][to] !== 0) {
        res.push({ to, weight: this.graph[from][to] })
      }
    }
    return res
  }
}

// 测试代码
const graph = new WeightedDigraphMatrix(3);
graph.addEdge(0, 1, 1);
graph.addEdge(1, 2, 2);
graph.addEdge(2, 0, 3);
graph.addEdge(2, 1, 4);

console.log(graph.hasEdge(0, 1)); // true
console.log(graph.hasEdge(1, 0)); // false

graph.neighbors(2).forEach(function(edge) {
    console.log(2 + " -> " + edge.to + ", weight: " + edge.weight);
});
// 2 -> 0, weight: 3
// 2 -> 1, weight: 4

graph.removeEdge(0, 1);
console.log(graph.hasEdge(0, 1)); // false