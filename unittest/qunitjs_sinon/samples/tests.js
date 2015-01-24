// QUnit テスト
QUnit.test( "hello test", function( assert ) {
  ok( 1 == "1", "Passed!" );
});

// Sinon を使ったテスト
QUnit.test(
"should call method once with each argument", function () {
    var object = { method: function () {} };
    var spy = sinon.spy(object, "method");
    spy.withArgs(42);
    spy.withArgs(1);

    object.method(42);
    object.method(1);

    ok(spy.withArgs(42).calledOnce);
    ok(spy.withArgs(1).calledOnce);
});
