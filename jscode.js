function validateTextBox() {
	var ime=document.getElementById("name");
	var adresa=document.getElementById("address");
	var komentar=document.getElementById("comment");

if (ime.value.length < 5 || adresa.value.length < 5 || komentar.value.length < 5) {
		alert("Molim vas upisite najmanje 5 karaktera");
		ime.focus();
		ime.style.border=" 2px solid red ";
		return false;    
	}
}