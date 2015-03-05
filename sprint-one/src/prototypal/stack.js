var Stack = function() {
	var newStack = Object.create(stackMethods);
	newStack.idx = 0;
	newStack.storage = {};

	return newStack;
};

var stackMethods = {};

stackMethods.push = function (value) {
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
