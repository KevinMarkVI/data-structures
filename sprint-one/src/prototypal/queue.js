var Queue = function() {
	var newQueue = Object.create(queueMethods);
	newQueue.storage = {};
	newQueue.upperIndex = 0;
	newQueue.lowerIndex = 0;
	return newQueue;
};

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var queueMethods = {};

queueMethods.enqueue = function(value) {
	this.storage[this.upperIndex] = value;
	this.upperIndex++;
};

queueMethods.dequeue = function(){
	if (this.lowerIndex < this.upperIndex) {
		var removed = this.storage[this.lowerIndex];
		delete this.storage[this.lowerIndex];
		this.lowerIndex++;
		return removed;
	}
};

queueMethods.size = function(){
	return (this.upperIndex - this.lowerIndex);
};