// main.js
/**
* This is an bare-bones example JavaScript file with preferred formatting.
* JSHint will error if proper practices are not followed. For more details
* on JSHint refer to:
* LINK http://www.jshint.com/
* Please follow this format when writing JavaScript, and for more details
* refer to Google's JavaScript Styleguide:
* LINK: http://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml
*/

(function () {
	var page1 = {
		someFunction: function () {
			console.log('This function does stuff');
		}
	};

	document.addEventListener('DOMLoaded', function () {
		page1.someFunction();
	});
})();