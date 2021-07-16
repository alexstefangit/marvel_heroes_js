/*
	Description: checks if a file from the server exists
*/
function checkStatus(url) {
		var http = new XMLHttpRequest();
		http.open('HEAD', url, false);
		http.send();
		return http.status == 200;
}
