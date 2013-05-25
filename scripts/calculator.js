function Calculator() {
	if (!(this instanceof Calculator)) {
		return new Calculator();
	}
	this.expression = '' //åªç›ÇÃåvéZéÆÇï\Ç∑

	this.getExpression = function() {
		return this.expression;
	};
	
	this.append = function(ch) {
		this.expression = this.expression + ch;
	};
	
	this.clearEntry = function() {
		this.expression = this.expression.substring(0, this.expression.length - 1);
	};
	
	this.clear = function() {
		this.expression = '';
	};
	
	this.calculate = function() {
		this.expression = eval(this.expression);
	};

}