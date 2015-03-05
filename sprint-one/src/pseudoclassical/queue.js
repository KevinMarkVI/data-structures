var Queue = function() {
	this.storage = {};
	this.upperIndex = 0;
	this.lowerIndex = 0;
};

Queue.prototype.enqueue = function (value) {
	this.storage[this.upperIndex] = value;
	this.upperIndex++;
	return this.storage;
};

Queue.prototype.dequeue = function () {
	if (this.lowerIndex < this.upperIndex) {
		var removed = this.storage[this.lowerIndex];
		delete this.storage[this.lowerIndex];
		this.lowerIndex++;
		return removed;
	}
};

Queue.prototype.size = function () {
	return (this.upperIndex - this.lowerIndex);
};

