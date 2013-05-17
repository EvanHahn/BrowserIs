// BrowserIs 1.1.0
// GitHub repo: http://git.io/4aLmYA
// by Evan Hahn, based on Cedriking's is.js at http://git.io/_8KBqw

;(function(global) {

	// Define the `is` function.
	var is = function(request) {

		// Get the useragent.
		var ua = request.get('user-agent');

		// Get the answer. Some stuff is defined early for later use.
		var isMobile = (/iphone|ipod|(android.*?mobile)|blackberry|nokia/i).test(ua);
		var isTablet = (/ipad|android(?!.*mobile)/i).test(ua);
		var answer = {
			ie: (/msie/i).test(ua),
			ie6: (/msie 6/i).test(ua),
			ie7: (/msie 7/i).test(ua),
			ie8: (/msie 8/i).test(ua),
			ie9: (/msie 9/i).test(ua),
			firefox: (/firefox/i).test(ua),
			gecko: (/gecko/i).test(ua),
			opera: (/opera/i).test(ua),
			safari: (/webkit\W(?!.*chrome).*safari\W/i).test(ua),
			chrome: (/webkit\W.*(chrome|chromium)\W/i).test(ua),
			webkit: (/webkit\W/i).test(ua),
			mobile: isMobile,
			tablet: isTablet,
			desktop: !isMobile && !isTablet,
			kindle: (/kindle|silk/i).test(ua),
			tv: (/googletv|sonydtv/i).test(ua),
			windows: (/win/i).test(ua),
			mac: (/mac/i).test(ua),
			unix: (/x11/i).test(ua),
			linux: (/linux/i).test(ua),
		};

		// Return the answer.
		return answer;

	};

	// Export it.
	module.exports = is;

})(this);
