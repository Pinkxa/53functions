TestMyCode.run("testing hello_joe function", function(assert) {
    var result = hello_joe("bob");
    // is the result as we expected?
    assert.equals("Hello", result, "testing hello_joe function");
});