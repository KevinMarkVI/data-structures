var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i); // returns [bucket] or null/undefined
  var found = false; 
  if (!bucket) { 
    bucket = []; 
    this._storage.set(i, bucket); // [] @ index
  };
  for (var i = 0; i < bucket.length; i++){ 
    var subArray = bucket[i];
    if (subArray[0] === k){
      subArray[1] = v;
      found = true;
      break;
    }
  }
  if (!found){
    bucket.push([k, v]);
  }
};


//create bucket
//give bucket value of this._storage.get(i)
//if there is !bucket
// bucket = []

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i); // returns [bucket] or null/undefined
  var found = false; 
  for (var i = 0; i < bucket.length; i++){ 
    var subArray = bucket[i];
    if (subArray[0] === k){
      return subArray[1];
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i); // returns [bucket] or null/undefined
  var found = false; 
  for (var i = 0; i < bucket.length; i++){ 
    var subArray = bucket[i];
    if (subArray[0] === k){
      subArray[1] = null;
      found = true;
      break;
    }
  }
};


  //});


/*
 * Complexity: What is the time complexity of the above functions?
 */
