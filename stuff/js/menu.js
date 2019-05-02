/* Open when someone clicks on the span element */
function openNav() {
	document.getElementById("myNav").style.width = "100%";
	document.getElementById("body").style.overflow = "hidden";
	document.getElementById("buton").style.display = "none";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
	document.getElementById("myNav").style.width = "0%";
	document.getElementById("body").style.overflow = "scroll";
	document.getElementById("buton").style.display = "unset";

}