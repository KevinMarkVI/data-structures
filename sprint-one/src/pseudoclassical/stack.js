var Stack = function() {
	this.storage = {};
	this.idx = 0;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.push = function(value){
	this.storage[this.idx] = value;
	this.idx++;
	return this.storage;
};

Stack.prototype.pop = function(){
	if (this.idx > 0){
		this.idx--;
		var popped = this.storage[this.idx];
		delete this.storage[this.idx];
		return popped;
	}
};

Stack.prototype.size = function(){
	return this.idx;
};


