var searchInput = document.getElementById("myInput"); 

searchInput.addEventListener("keyup", searchFunction);

function searchFunction(e) {

	var filter, ul, li, a, i, trackSearch = 0;

	filter = searchInput.value.toUpperCase();
	ul = document.getElementById("myUL");
	li = ul.getElementsByTagName("li");

	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
			trackSearch++;
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}

	if(trackSearch === 0) {

		var node = document.createElement("li");
		var childNode = document.createElement("a");
		var textNode = document.createTextNode("No Record Found");
		
		childNode.appendChild(textNode);
		node.appendChild(childNode);

		ul.appendChild(node);
	}

}