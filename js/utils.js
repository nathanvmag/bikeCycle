function dom(id)
{
    return document.getElementById(id);
}
function autolog(un, pw) {
	var form = document.createElement("form");
	document.body.appendChild(form);
	form.method = "POST";
	form.action = "index.php";
	var element1 = document.createElement("INPUT");
	element1.name = "login";
	element1.value = un;
	element1.type = 'hidden';
	form.appendChild(element1);
	var element2 = document.createElement("INPUT");
	element2.name = "pass";
	element2.value = pw;
	element2.type = 'hidden';
	form.appendChild(element2);
	form.submit();
}