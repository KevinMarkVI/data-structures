var Graph = function(){
	this.storage = {};
};

Graph.prototype.addNode = function(node){

  var newNode = {};

  this.storage[node] = newNode;
};

Graph.prototype.contains = function(node){
	if (this.storage[node] != undefined) {
	  return true;
	}
	  return false;
};

Graph.prototype.removeNode = function(node){
	delete this.storage[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  if (this.storage[fromNode][toNode]) {
		return true;
	}
	return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
	if (this.storage[fromNode] && this.storage[toNode]) {
	  this.storage[fromNode][toNode] = toNode;
	  this.storage[toNode][fromNode] = fromNode;
	}
};


Graph.prototype.removeEdge = function(fromNode, toNode){
	delete this.storage[fromNode][toNode];
};

Graph.prototype.forEachNode = function(cb){
	for (key in this.storage) {
		cb(key);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



