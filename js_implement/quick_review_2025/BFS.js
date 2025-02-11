// 图结构的 BFS 遍历，从节点 s 开始进行 BFS
const bfs = (graph, s) => {
  const visited = []
  const q = []
  q.push(s)
  visited[s] = true

  while (q.length) {
    const cur = q.shift()
    console.log("visit " + cur);
    const neighbors = graph.neighbors(cur)
    for (let i = 0; i < neighbors.length; i++) {
      const e = neighbors[i]
      if (!visited[e.to]) {
        q.push(e.to)
        visited[e.to] = true
      }
    }
  }
}

// 从 s 开始 BFS 遍历图的所有节点，且记录遍历的步数
const bfsWithStep = (graph, s) => {
  const visited = []
  const q = []
  q.push(s)
  visited[s] = true
  let step = 0

  while (q.length) {
    const size = q.length
    for (let i = 0; i < size; i++) {
      const cur = q.shift()
      console.log("visit " + cur, "step " + step);
      const neighbors = graph.neighbors(cur)
      for (let i = 0; i < neighbors.length; i++) {
        const e = neighbors[i]
        if (!visited[e.to]) {
          q.push(e.to)
          visited[e.to] = true
        }
      }
    }
    step++
  }
}

// 从 s 开始 BFS 遍历图的所有节点，且记录权重
class State {
  constructor(node, weight) {
    this.node = node;
    this.weight = weight;
  }
}

const bfsWithWeight = (graph, s) => {
  const visited = []
  const q = []
  q.push(new State(s, 0))
  visited[s] = true

  while (q.length) {
    const size = q.length
    for (let i = 0; i < size; i++) {
      const cur = q.shift()
      console.log("visit " + cur, "step " + step);
      const neighbors = graph.neighbors(cur.node)
      for (let i = 0; i < neighbors.length; i++) {
        const e = neighbors[i]
        if (!visited[e.to]) {
          q.push(new State(e.to, cur.weight + e.weight))
          visited[e.to] = true
        }
      }
    }
  }
}
