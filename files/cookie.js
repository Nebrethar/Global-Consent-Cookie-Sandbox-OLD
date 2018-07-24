/*
Information on API used can be found at Mozilla WebExtensions documentation
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/cookies 
*/

document.addEventListener("click", (e) => {

	function messenger() {
		browser.tabs.executeScript({file: "write-cookie.js"});
		};
messenger

var getting = browser.cookies.getAll({name:"euconsent"});
		function logCookies(cookies) 
		{
			browser.tabs.executeScript({
			file: "write-cookie.js"
			});
		}
		function onRemoved() {
			console.log("Removed!");
		}
		function onError(error) {
			console.error(error);
		}
		browser.webNavigation.onBeforeNavigate.addListener(logCookies);
		if (e.target.classList.contains("log")) 
		{
			var getting = browser.cookies.getAll({});
			messenger();
			getting.then(logCookies);
		}
		else if (e.target.classList.contains("clear")) 
		{
			browser.browsingData.removeCookies({}).
			then(onRemoved, onError);
		}

	});