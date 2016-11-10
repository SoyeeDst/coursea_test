function JT(name, age, sex) {
	this.name = name;
	this.age = age;
	this.sex = sex;
}

JT.prototype.increaseAge = function() {
	this.age = this.age + 1;
}

JT.prototype.transSex = function() {
	if (this.sex === 'Male') {
	    this.sex = 'Female';
	} else {
	    this.sex = 'Male';
	}
}

JT.prototype.resetName = function() {
	this.name = 'UNKNOWN NAME';
}

