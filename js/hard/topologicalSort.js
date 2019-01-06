// using breadth-first search
function topologicalSort(jobs, deps) {
  const jobGraph = createJobGraph(jobs, deps);
  return getOrderedJobs(jobGraph);
}

// build initial graph of jobs
const createJobGraph = (jobs, deps) => {
  const graph = new JobGraph(jobs);
  for (const [job, dep] of deps) {
    graph.addDependency(job, dep);
  }
  return graph;
};

// return array of valid order jobs can be executed in
const getOrderedJobs = (graph) => {
  const orderedJobs = [];
  const nodesWithNoPrereqs = graph.nodes.filter(node => node.numOfPrereqs === 0);
  while (nodesWithNoPrereqs.length > 0) {
    const node = nodesWithNoPrereqs.pop();
    orderedJobs.push(node.job);
    removeDependencies(node, nodesWithNoPrereqs);
  }
  const graphHasEdgesRemaining = graph.nodes.some(node => node.numOfPrereqs > 0);
  return graphHasEdgesRemaining ? [] : orderedJobs;
}

// go through a node's list of dependencies. Since node is being processed,
// decrement their # of prereqs by one
const removeDependencies = (node, nodesWithNoPrereqs) => {
  while (node.dependencies.length > 0) {
    const dependency = node.dependencies.pop();
    dependency.numOfPrereqs--;
    // if dependent node no longer has prereqs, add it to the list of nodes w/ no prereqs
    if (dependency.numOfPrereqs === 0) nodesWithNoPrereqs.push(dependency);
  }
}

// graph representing job dependencies
class JobGraph {
  constructor(jobs) {
    this.nodes = [];
    this.graph = {};
    for (const job of jobs) {
      this.addNode(job);
    }
  }

  addDependency(job, dep) {
    const jobNode = this.getNode(job);
    const depNode = this.getNode(dep);
    jobNode.dependencies.push(depNode);
    depNode.numOfPrereqs++;
  }

  addNode(job) {
    this.graph[job] = new JobNode(job);
    this.nodes.push(this.graph[job]);
  }

  getNode(job) {
    if (!(job in this.graph)) this.addNode(job);
    return this.graph[job];
  }
}

class JobNode {
  constructor(job) {
    this.job = job;
    this.dependencies = [];
    this.numOfPrereqs = 0;
  }
}

// Do not edit the line below.
exports.topologicalSort = topologicalSort;
