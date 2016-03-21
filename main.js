// example 1
//alert("hello world! allen");

// example 2
// require(['jquery'],function($) {
// 	console.log("this is allen 1");
//     $('#output').html('hello world -- this is my first module!');
// });

//example 3
// require(['jquery', 'message'],function($, message) {
// 	console.log("this is allen 1");
//     $('#output').html(message);
// });

//example 4
require(['jquery', 'message', 'another-module'],function($, message, anotherModule) {
	console.log("this is allen 1");
    $('#output').html(message+' + '+anotherModule);
});


console.log("this is allen 2");