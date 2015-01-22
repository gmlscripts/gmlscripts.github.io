/* 
**	COOKIE HANDLERS
*/
function getCookie(c_name) {
	if (document.cookie.length>0) {
		var c_start = document.cookie.indexOf(c_name + "=");
		if (c_start !== -1) { 
			c_start = c_start + c_name.length+1; 
			var c_end = document.cookie.indexOf(";",c_start);
			if (c_end === -1) { c_end = document.cookie.length; }
			return unescape(document.cookie.substring(c_start,c_end));
		} 
	}
	return "";
}

function setCookie(c_name,c_value,expiredays) {
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	document.cookie = c_name + "=" + escape(c_value) +
	((expiredays === null) ? "" : ";expires=" + exdate.toGMTString()) +
	";path=/";
}

function delCookie(name, path, domain) {
	if (getCookie(name)) {
		document.cookie = name + "=" +
		((path   === null) ? "" : "; path="   + path) +
		((domain === null) ? "" : "; domain=" + domain) +
		"; expires=Thu, 01-Jan-70 00:00:01 GMT";
	}
}

