function clearornot(answer)
		{
			if (answer === "yes")
			{
			browser.browsingData.removeCookies({});
			}
		}
clearornot("no");