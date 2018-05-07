//this part is executed before the DOM starts loading.
//If we are on reddit.com ('best')
if ("https://www.reddit.com/" == window.location.href) // if it matches pattern defined above
{
	//redirect to /hot
	window.location.href = "/hot";
}
console.log("Im injected");
//This part is executed after the page has loaded.
//This is necessary to change the links of the home button in the top bar and the Snoo-link.
window.onload=function() {

	//check if we are on reddit.com
	if (window.location.href.split("reddit.com").length>1) {

		//Some subreddits have the Snoo-link in "header-img" some in "header-img-a". So we're simply trying to change both 
		//with these extremely unprofessional try-catch blocks :-).
		try {
			document.getElementById("header-img").href += "hot";
		} catch(e) {

		}
		try {
			document.getElementById("header-img-a").href += "hot";
		} catch(e) {
			
		}

		//change home-link in top-bar.
		let choices = document.getElementsByClassName("choice");
		for (let key in choices) {
			if (choices[key].href == "https://www.reddit.com/" && choices[key].innerHTML == "home") {
				choices[key].href += "hot";
			}
		}
		
	}
}