TestMyCode.run("testing hello_uppercase function", function(assert) {
    var result = hello_uppercase();
    // is the result as we expected?
    assert.equals("hello_uppercase", result, "testing hello_uppercase function");
});