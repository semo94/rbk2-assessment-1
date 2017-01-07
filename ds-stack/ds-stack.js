var Stack = function() {
	var stack = Object.creat(prototypeMethodes);
	stack._storage = [];
	return stack;
};

var prototypeMethodes = {};
prototypeMethodes.add = function(value){
	this._storage.push(value);

};
prototypeMethodes.remove = function(){
	if(this._storage.length > 0){
		return this._storage.pop();
	}
};