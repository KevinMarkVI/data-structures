var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var upperIndex = 0;
  var lowerIndex = 0;
  // Implement the methods below

  someInstance.enqueue = function(value){
    // add to the top 
   storage[upperIndex] = value;
   upperIndex++;
  };

  someInstance.dequeue = function(){
    if (lowerIndex <= upperIndex) {
      var removed = storage[lowerIndex];
      delete storage[lowerIndex];
      lowerIndex++;
      return removed;
    }
    // exit line, unshift at lower end 
  };

  someInstance.size = function(){
    if (lowerIndex >= upperIndex) {
      return 0;
    }
    return (upperIndex - lowerIndex);
  };

  return someInstance;
};
