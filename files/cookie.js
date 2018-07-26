/*
Information on API used can be found at Mozilla WebExtensions documentation
https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/cookies 
*/

document.addEventListener("click", (e) => {
		function consentCookies(cookies) 
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
		function logCookies(cookies) 
		{
			if (cookies === undefined || cookies.length == 0) {
				console.log("No cookies found!");
			}
			else
			{
				var j = 1;
				for (let cookie of cookies) 
				{
				//console.log(cookie);
				console.log("#" + j);
					console.log(cookie);
					j++;
				}
			}
		}
		browser.webNavigation.onBeforeNavigate.addListener(logCookies);
		if (e.target.classList.contains("log")) 
		{
			var getting = browser.cookies.getAll({});
			getting.then(logCookies);
		}
		if (e.target.classList.contains("consent")) 
		{
			consentCookies();
		}
		else if (e.target.classList.contains("clear")) 
		{
			browser.browsingData.removeCookies({}).
			then(onRemoved, onError);
		}

	});