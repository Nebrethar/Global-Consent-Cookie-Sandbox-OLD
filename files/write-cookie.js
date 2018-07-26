var value = (value + "=");
console.log("\n\n**********************************************\n\n");
console.log("--------------------ORIGINAL COOKIES--------------------");
var decodedCookie = document.cookie;
var allcookie = decodedCookie.split(';');
console.log(document.cookie + "\n");
var found = false;
var j;
var trimspace;
for (var i=0;i<allcookie.length;i++)
{
	var inc = allcookie[i];
	j = i+1;
	console.log("\n---------------COOKIE " + j + "---------------");
	console.log(inc);
	var incsplit = inc.split('=');
	var incone = incsplit[0];
	var inctwo = incsplit[1];
	//console.log(incone + " ? " + incthree); 
	if (incone == " euconsent")
	{
		found = true;
		console.log("****************CONSENT COOKIE FOUND****************\n\n");
		trimspace = "euconsent=00000000000000000000000000000000000;path=/;"
		allcookie[i] = trimspace.trim();
	}
	else
	{
		trimspace = allcookie[i] + ";path=/;";
		allcookie[i] = trimspace.trim();
	}
	//console.log("|" + allcookie[i] + "|");
}
//console.log(allcookie.toString());
if (found)
{
console.log("\n--------------------REPLACE THE VALUE--------------------\n");
console.log("\n");
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