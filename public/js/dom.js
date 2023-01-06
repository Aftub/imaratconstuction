


usefetch("topbar.html", "top-bar");
usefetch("navbar.html", "nav-bar");
usefetch("footer.html", "footer");

document.getElementById("tag").innerHTML = "Imarat Construction - Committed to building sustainable structures.";


function usefetch(url,id){

	fetch(url).then(function (response) {
		// The API call was successful!
		return response.text();
	}).then(function (html) {
		// This is the HTML from our response as a text string
		//console.log(html);
		document.getElementById(id).innerHTML = html;
	}).catch(function (err) {
		// There was an error
		console.warn('Something went wrong.', err);
	});

} 

