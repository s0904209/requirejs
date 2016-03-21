//define(['jquery'])

define(function () {
	console.log('allen message module');
    return 'Hello World - this is my message module!';
});

define('another-module', function () {
	console.log('allen another-module');
    return 'Another module';
});