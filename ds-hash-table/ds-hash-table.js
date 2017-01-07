var makeHashTable = function() {
  var max = 4;
  return {
    _storage: [],
    retrieve: function(key) {
      var index = hashFn(key,max);
      if(_storage[index] === undefined){
        return "no value founds";
      }
      for (var i = 0; i < _storage[index].length; i++) {
        if(_storage[index][i][0]===key){
          return _storage[index][i][1];
        }
      }
      return "no value founds";
      
    },

    insert: function(key, value) {
      var index = hashFn(key,max);
      if(_storage[index] === undefined){
        _storage[index] = [];
      }
      var bucket = [key,value];
      var flage = false;
      for (var i = 0; i < _storage[index].length; i++) {
        if(_storage[index][i][0] === key){
          flage = false;
          break;
        }
      }
      if(flage){
        _storage[index].push(bucket);
      }
    }
  };
};

// This is a "hashing function". You don't need to worry about it, just use it to turn any key into a pseudo-random key
var hashFn = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var letter = str[i];
    hash = (hash << 5) + letter.charCodeAt(0);
    hash = (hash & hash) % max;
  }
  return hash;
};

