//this part is executed before the DOM starts loading.
//If we are on reddit.com ('best')
if ("https://www.reddit.com/" == window.location.href || "http://www.reddit.com/" == window.location.href || "https://old.reddit.com/" == window.location.href || "https://old.reddit.com/" == window.location.href)
{
	//redirect to /hot
	window.location.href = "/hot";
}

//This part is executed after the page has loaded.
//This is necessary to change the links of the home button in the top bar and the Snoo-link.
window.onload=function() {

	//check if we are on reddit.com
	if (window.location.href.split("reddit.c").length>1) {

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
			if (choices[key].href == "https://www.reddit.com/" || choices[key].href == "https://old.reddit.com/") {
				if (choices[key].innerHTML == "home") {

				} else if ( choices[key].innerHTML == "best")
				choices[key].href += "#best";
			}
		}
		
	}
}