var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = Node(value);
    if (list.tail != null){
      list.tail.next = newNode;
    }
    if (list.head === null){
      list.head = newNode;
    }
    list.tail = newNode;
    return list.tail;
  };

  list.removeHead = function(){
    var listHeadVal = list.head.value;
    var headSuccessor = list.head.next;
    delete list.head;
    list.head = headSuccessor;
    return listHeadVal;  
  };

  list.contains = function(target){
    var nodeFinder = function(node) {
      if (node.value === target) {
        return true;
      } else if (node.next === null) {
        return false;
      } else {
        return nodeFinder(node.next);
      }
    };
    return nodeFinder(list.head);
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
