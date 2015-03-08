var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  newTree.children = []; 

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	var newChild = Tree(value);
	this.children.push(newChild); 
	//Tessa suggested doing this better maybe add child of child stuff


	
};

treeMethods.contains = function(target){
	if (this.value === target) {
		return true;
	} 

	if (this.children.length > 0) {
		for (var i = 0; i < this.children.length; i++) {
			if (this.children[i].contains(target) === true) {
				return true;
				
			}
		} 
	};
	return false;
};







 

/*
 * Complexity: What is the time complexity of the above functions?
 */

	// if (this.value === target) {
	// 	return true;
	// } else if (this.children.length > 0) {
 // 		for (var i = 0; i < this.children.length; i++) {
 // 			if (this.children[i] === target) {
 // 				return true;
 // 			};
 // 		};
 // 	}

 // 	if (this.children.length > 0){
 // 		return this.children.contains(target);
 // 	};

 // 	return false;
 // };
