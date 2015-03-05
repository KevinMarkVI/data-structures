var Stack = function() {
	var newStack = {};
	newStack.storage = {};
	newStack.idx = 0;
	extend(newStack, stackMethods);

	return newStack;
};

var extend = function (to, from) {
	for (var key in from) {
		to[key] = from[key];
	}
};

var stackMethods = {};
 
stackMethods.push = function (value){
	this.storage[this.idx] = value;
	this.idx++;
	return this.storage;
};

stackMethods.pop = function () {
	if (this.idx > 0) {
		this.idx--;
		var popped = this.storage[this.idx];
		delete this.storage[this.idx];
		return popped;
	}			
};

stackMethods.size = function () {
	return this.idx;
};

