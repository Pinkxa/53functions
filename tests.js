QUnit.test( "hello test", function( assert ) {
  var result = hello();
  assert.equal(result, "hello world", "Passed!" );
});

QUnit.test( "hello_uppercase test", function( assert ) {
  var result = hello_uppercase("Pinkxa");
  assert.equal(result, "Hello, Pinkxa", "Passed!" );
});

QUnit.test( "hello_joe test", function( assert ) {
  var result = hello_joe("Bob");
  assert.equal(result, "Hello!", "Passed!" );

  var result = hello_joe("Joe");
  assert.equal(result, "Hello!", "Passed!" );

 var result = hello_joe("Pretty");
  assert.equal( result, "Hello, Pretty", "Passed!" );  
});

QUnit.test( "number_list test", function( assert ) {
  var result = number_list(5);
  assert.deepEqual(result, [1,2,3,4,5], "Passed!" );
});

QUnit.test( "sum_numbers test", function( assert ) {
  var result = sum_numbers(11);
  assert.deepEqual(result, 66, "Passed!" );
});

QUnit.test( "length test", function( assert ) {
  var result = length("Pretty");
  assert.equal(result, 6, "Passed!" );
});

QUnit.test( "upper test", function( assert ) {
  var result = upper("notshokovu");
  assert.ok("notshokovu", "Passed!" );
});

QUnit.test( "reverse test", function( assert ) {
  var result = reverse("Programmer");
  assert.ok("Programmer", "Passed!" );
});

QUnit.test( "hello_list test", function( assert ) {
  var result = hello_list(5);
  assert.ok("hello world!", "Passed!" )
});