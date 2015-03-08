var BinarySearchTree = function(value){
	var newBSTree = {};
	this.left = newBSTree.left; // A position within a nested element
	this.right = newBSTree.right; // 
	this.value = value;
	this.storage = []
	return newBSTree;
};


var binarySearchTreeMethods = {};

BinarySearchTree.prototype.insert = function (value) {
  var newNode = newBSTree(value);
  if (this.value < newNode.value) {
  	if (this.right > newNode.value) {
  		this.right = newNode.value;
  	} else {
  		if (this.left < newNode.value) {
  			this.left = newNode.value;
  		}
  	}
  }

  }
};

BinarySearchTree.prototype.insert = function (value) {


};


BinarySearchTree.prototype.depthFirstLog = function (callBack) {

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
