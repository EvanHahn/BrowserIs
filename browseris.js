// BrowserIs 1.0.0
// GitHub repo: http://git.io/4aLmYA
// by Evan Hahn, but based on Cedriking's is.js at http://git.io/_8KBqw

;(function(global) {

	// Define the browser function.
	var browser = function(request) {

		// The useragent is different in a Node environment.
		var ua;
		if (request) {
			if (typeof window !== 'undefined') {
				throw new Error('browser does not take an argument.');
			}
			ua = request.get('user-agent');
		} else {
			if (typeof window === 'undefined') {
				throw new Error('You must provide an argument to browser.');
			}
			ua = (window.navigator && navigator.userAgent) || '';
		}

		// Return the object. Some stuff is defined early for later use.
		var isMobile = (/iphone|ipod|(android.*?mobile)|blackberry|nokia/i).test(ua);
		var isTablet = (/ipad|android(?!.*mobile)/i).test(ua);
		return {
			isIE: (/msie/i).test(ua),
			isIE6: (/msie 6/i).test(ua),
			isIE7: (/msie 7/i).test(ua),
			isIE8: (/msie 8/i).test(ua),
			isIE9: (/msie 9/i).test(ua),
			isFirefox: (/firefox/i).test(ua),
			isGecko: (/gecko/i).test(ua),
			isOpera: (/opera/i).test(ua),
			isSafari: (/webkit\W(?!.*chrome).*safari\W/i).test(ua),
			isChrome: (/webkit\W.*(chrome|chromium)\W/i).test(ua),
			isWebkit: (/webkit\W/i).test(ua),
			isMobile: isMobile,
			isTablet: isTablet,
			isDesktop: !isMobile && !isTablet,
			isKindle: (/kindle|silk/i).test(ua),
			isTV: (/googletv|sonydtv/i).test(ua),
			isWindows: (/win/i).test(ua),
			isMac: (/mac/i).test(ua),
			isUnix: (/x11/i).test(ua),
			isLinux: (/linux/i).test(ua),
		};

	};

	// Export it.
	if (typeof exports !== 'undefined') {
		if (typeof module !== 'undefined' && module.exports) {
			exports = module.exports = browser;
		}
		exports.browser = browser;
	} else {
		global.browser = browser;
	}

})(this);
