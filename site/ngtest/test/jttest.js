describe("JT Xiaoming test", function() {
  it("increase the JT age", function() {
  	var jt = new JT('Xiaoming', 10, 'male');
  	jt.increaseAge();
    expect(jt.age).toBe(11);
  });

  it("trans sex of JT Xiaoming", function() {
  	var jt = new JT('Xiaoming', 10, 'male');
  	var os = jt.sex;
  	jt.transSex();
  	expect(jt.sex).not.toBe(os);
  }); 

  it("Reset the name of JT Xiaoming", function() {
  	var jt = new JT('Xiaoming', 10, 'Male');
  	jt.resetName();
  	expect(jt.name).toBe('UNKNOWN NAME');
  });

  it("Just have a test", function() {
  	expect(11).toEqual(jasmine.any(Number));
  });
});
