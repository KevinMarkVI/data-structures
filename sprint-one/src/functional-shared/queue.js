var Queue = function(){
	var newQueue = {}; 
	newQueue.storage = {};

	newQueue.upperIndex = 0;
	newQueue.lowerIndex = 0;
	extend(newQueue, queueMethods);
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  return newQueue;
};

var extend = function (to, from) {
	for (var key in from) {
		to[key] = from[key];
	}
};

var queueMethods = {};

queueMethods.enqueue = function(value){
	this.storage[this.upperIndex] = value;
	this.upperIndex++;
	return this.storage;
};

queueMethods.dequeue = function(){
	if (this.lowerIndex < this.upperIndex) {
		var popped = this.storage[this.lowerIndex];
		delete this.storage[this.lowerIndex];
		this.lowerIndex++;
		return popped;
	}
};	

queueMethods.size = function(){
	return (this.upperIndex - this.lowerIndex);
};
