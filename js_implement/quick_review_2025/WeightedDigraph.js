class WeightedDigraph {
  constructor(n) {
    this.graph = Array.from({ length: n }, () => [])
  }

  addEdge(from, to, weight) {
    this.graph[from].push({ to, weight })
  }

  removeEdge(from, to) {
    this.graph[from] = this.graph[from].filter(node => node.to !== to)
  }

  hasEdge(from, to) {
    return this.graph[from].some(node => node.to === to)
  }

  weight(from, to) {
    const edge = this.graph[from].find(node => node.to === to);
    return edge ? edge.weight : 'no such edge';
  }

  neighbors(from) {
    return this.graph[from]
  }
}

// 测试代码
const graph = new WeightedDigraph(3);
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