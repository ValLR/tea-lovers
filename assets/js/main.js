var sub = document.getElementById("suscribirse");
sub.addEventListener("click", suscribe);

function suscribe (){
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var address = document.getElementById("address").value;
	var select = document.getElementById("list").selectedIndex;

	if(name == "" || /^[a-zA-Z]*$/.test(name) == false ||email == "" || /\S+@\S+\.\S+/.test(email) == false ||  address == "" || select == 0){
  		alert("ERROR, campo inválido");
  	}else{
  		alert("Muchas gracias por tu suscripción, " + name);
  	}
}


	