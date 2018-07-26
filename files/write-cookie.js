var value = (value + "=");
console.log("\n\n**********************************************\n\n");
console.log("--------------------ORIGINAL COOKIES--------------------");
/*pulls all cookies from the current tab
note - I would like to see about pulling more 
than just the current tab's cookies in the future.*/
var decodedCookie = document.cookie;
/*separates cookies into an array by their separating ";"*/
var allcookie = decodedCookie.split(';');
/*Just shows the current state of the cookie.*/
console.log(document.cookie + "\n");
/*For if a GVCC is found (by name "euconsent")*/
var found = false;
/*counter for logging*/
var j;
/*This is used to trim the finished 
product of whitespace on both sides.*/
var trimspace;
/*Iterates through all available cookies?*/
for (var i=0;i<allcookie.length;i++)
{
	var inc = allcookie[i];
	j = i+1;
	console.log("\n---------------COOKIE " + j + "---------------");
	console.log(inc);
	var incsplit = inc.split('=');
	/*Name and value. HERE THEY ARE IN FORMATE NAME=VALUE*/
	var incone = incsplit[0];
	var inctwo = incsplit[1];
	//console.log(incone + " ? " + incthree); 
	if (incone == " euconsent")
	{
		/*Sets an euconsent cookie to a different value (0's for now). Trims value.*/
		found = true;
		console.log("****************CONSENT COOKIE FOUND****************\n\n");
		trimspace = "euconsent=00000000000000000000000000000000000;"
		allcookie[i] = trimspace.trim();
	}
	else
	{
		/*Otherwise just cleans it up*/
		trimspace = allcookie[i] + ";";
		allcookie[i] = trimspace.trim();
	}
	//console.log("|" + allcookie[i] + "|");
}
//console.log(allcookie.toString());
if (found)
{
console.log("\n--------------------REPLACE THE VALUE--------------------\n");
console.log("\n");
/*Replaces the cookie value with the edited cookie string. (It is supposed to).
Notes every cookie going in as a separate document.cookie and seems to
have an issue overwriting cookies that website has put in place.
It can functionally overwrite its own cookies.*/
document.cookie = "startmarker=****THIS IS THE START OF THE EDITED COOKIE STRING****";
for (var i=0;i<allcookie.length;i++)
{
console.log("*************************************************");
trimspace = allcookie[i];
console.log(trimspace);
document.cookie = trimspace.trim();
}
document.cookie = "endmarker=****THIS IS THE END OF THE EDITED COOKIE STRING****";
}
console.log("--------------------FINAL COOKIES--------------------\n");
console.log(document.cookie);