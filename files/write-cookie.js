var value = (value + "=");
var decodedCookie = decodeURIComponent(document.cookie);
var allcookie = decodedCookie.split(';');
console.log("executes!");
console.log(document.cookie + "\n");
for (var i=0;i<allcookie.length;i++)
{
	var inc = allcookie[i];
	console.log(inc);
	var incsplit = inc.split('=');
	var incone = incsplit[0];
	var inctwo = incsplit[1];
	console.log(incone + " " + inctwo + "\n\n");
	if (inctwo === "1")
	{
		console.log("FOUND");
		allcookie[i] = incone + "=0";
	}
}
//console.log(allcookie.toString());
document.cookie = encodeURIComponent(allcookie);
console.log(document.cookie);
console.log("**********************************************");