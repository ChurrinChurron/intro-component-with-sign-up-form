let nombre = document.getElementById("nombre");
	apellido = document.getElementById("apellido");
 	email = document.getElementById("correo");
 	contraseña = document.getElementById("contraseña");
 	equis = document.getElementsByTagName("img");
 	envio = document.getElementById("enviar");
 	formu = document.querySelector("form");
 	textoNombre = document.getElementById("info-nom");
 	textoApellido = document.getElementById("info-apell");
 	textoEmail = document.getElementById("info-correo");
 	textoContraseña = document.getElementById("info-pass");
 	validar = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	esValido = false;
 	envio.disabled = true;

 formu.addEventListener("submit", (ev) => {

 	ev.preventDefault();

 });

 //validar nombre

 nombre.addEventListener("blur", () => {

 	if(nombre.value.length < 1 || nombre.value.trim() == "") {

 		textoNombre.innerHTML = "First Name cannot be empty";
 		nombre.style.border = "solid 2px hsl(0, 100%, 74%)";
 		equis[0].style.display = "inline-block";
 		esValido = false;

 	}

 	else {

 		textoNombre.innerHTML = "";
 		nombre.style.border = "solid 1px hsl(246, 25%, 77%)";
 		equis[0].style.display = "none";
 		esValido = true;
 	}

 });

 //validar apellido 

 apellido.addEventListener("blur", () => {

 	if(apellido.value.length < 1 || apellido.value.trim() == "") {

 		textoApellido.innerHTML = "Last Name cannot be empty";
 		apellido.style.border = "solid 2px hsl(0, 100%, 74%)";
 		equis[1].style.display = "inline-block";
 		esValido = false;

 	}

 	else {

 		textoApellido.innerHTML = "";
 		apellido.style.border = "solid 1px hsl(246, 25%, 77%)";
 		equis[1].style.display = "none";
 		esValido = true;
 	}
 	
 });

 //validar correo

 email.addEventListener("blur", () => {

 	if(email.value.length < 1 || email.value.trim() == "") {

 		textoEmail.innerHTML = "Email cannot be empty";
 		email.style.border = "solid 2px hsl(0, 100%, 74%)";
 		equis[2].style.display = "inline-block";
 		esValido = false;

 	}

 	else if(!validar.test(email.value)) {

 		textoEmail.innerHTML = "Looks like this is not an email";
 		email.style.border = "solid 2px hsl(0, 100%, 74%)";
 		equis[2].style.display = "inline-block";
 		esValido = false;
 	}

 	else {

 		textoEmail.innerHTML = "";
 		email.style.border = "solid 1px hsl(246, 25%, 77%)";
 		equis[2].style.display = "none";
 		esValido = true;
 	}
 	
 });

 //validar contraseña

  contraseña.addEventListener("blur", () => {

 	if(contraseña.value.length < 1 || contraseña.value.trim() == "") {

 		textoContraseña.innerHTML = "Password cannot be empty";
 		contraseña.style.border = "solid 2px hsl(0, 100%, 74%)";
 		equis[3].style.display = "inline-block";
 		esValido = false;

 	}

 	else if(contraseña.value.length < 8) {

 		textoContraseña.innerHTML = "Must have at least 8 characters";
 		contraseña.style.border = "solid 2px hsl(0, 100%, 74%)";
 		equis[3].style.display = "inline-block";
 		esValido = false;
 	}

 	else {

 		textoContraseña.innerHTML = "";
 		contraseña.style.border = "solid 1px hsl(246, 25%, 77%)";
 		equis[3].style.display = "none";
 		esValido = true;
 	}
 	
 });

 //enviar formulario

 envio.addEventListener("click", () => {

 	if(esValido) {

 		envio.disabled = false;
 		alert(`Thanks for choosing us, ${nombre.value}!`);
 	}

 });
