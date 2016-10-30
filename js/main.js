function validateForm() {
//funcion que comprueba que nombre sea un string sin admitir caracteres especiales y que sus primeras letras sean mayúsculas.
function nombre() {
	var nombre = document.getElementById('name').value;
	for (var i=0; i<=nombre.length; i++){
		if (nombre === null || nombre.length === 0) {
			//alert ("Ingrese nombre");
			var contenedorAlert = document.getElementsByClassName('name-container')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('Porfavor ingrese nombre');
			etiqueta.appendChild(nodoError);
			contenedorAlert.appendChild(etiqueta);
			return false;
		}else if (nombre.substring(0,1) !== nombre.substring(0,1).toUpperCase()){
			//alert("Ingrese nombre con mayúscula.");
			var contenedorAlert = document.getElementsByClassName('name-container')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('Porfavor ingrese nombre con Mayúscula.');
			etiqueta.appendChild(nodoError);
			contenedorAlert.appendChild(etiqueta);
			return false;
		}else if (/[0-9]/.test(nombre)) {
			//alert("Ingrese solo letras.");
			var contenedorAlert = document.getElementsByClassName('name-container')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('Porfavor ingrese solo letras.');
			etiqueta.appendChild(nodoError);
			contenedorAlert.appendChild(etiqueta);
			return false;
		}else {
			return true;
		}
	}
}
nombre();
//funcion que comprueba que apellido sea un string sin admitir caracteres especiales y que sus primeras letras sean mayúsculas.
function apellido() {
	var apellido = document.getElementById('lastname').value;
	for (var i=0; i<=apellido.length; i++){
		if (apellido === null || apellido.length === 0) {
			//alert ("Ingrese Apellido");
			var contenedorAlert = document.getElementsByClassName('lastname-container')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('Porfavor ingrese apellido.');
			etiqueta.appendChild(nodoError);
			contenedorAlert.appendChild(etiqueta);
			return false;
		}else if (apellido.substring(0,1) !== apellido.substring(0,1).toUpperCase()){
			//alert("Ingrese apellido con mayúscula.");
			var contenedorAlert = document.getElementsByClassName('lastname-container')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('Porfavor ingrese apellido con Mayúscula.');
			etiqueta.appendChild(nodoError);
			contenedorAlert.appendChild(etiqueta);
			return false;
		}else if (/[0-9]/.test(apellido)) {
			//alert("Ingrese solo letras.");
			var contenedorAlert = document.getElementsByClassName('lastname-container')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('Porfavor ingrese solo letras.');
			etiqueta.appendChild(nodoError);
			contenedorAlert.appendChild(etiqueta);
			return false;
		}else {
			return true;
		}
	}
}
apellido();
// funcion que valida correo electronico.
function validaremail(){
	var email = document.getElementById('input-email').value;
	var verificacion = /[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
	if (verificacion.exec(email)===null) {
		//alert("Ingrese un correo valido.");
		var contenedorAlert = document.getElementsByClassName('email-container')[0];
		var etiqueta = document.createElement('span');
		var nodoError = document.createTextNode('Porfavor ingrese correo valido.');
		etiqueta.appendChild(nodoError);
		contenedorAlert.appendChild(etiqueta);
		return false;
	} else {
		return true;
	}
} 
validaremail();	
//función que valida si se ingreso contraseña y que sea una contraseña segura.
function contraseña() {
	var pass = document.getElementById('input-password').value;
	for (var i =0; i <= pass.length; i++) {
		if (pass.length < 6) {
			//alert ("Debe tener al menos 6 caracteres");
			var contenedorAlert = document.getElementsByClassName('form-group')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('Contraseña debe contener almenos 6 caracteres.');
			etiqueta.appendChild(nodoError);
			contenedorAlert.appendChild(etiqueta);
		}else if (pass === "password" || pass === "123456" || pass === "098754") {
			//alert ("Su contraseña no puede ser password,123456, 098754");
			var contenedorAlert = document.getElementsByClassName('form-group')[0];
			var etiqueta = document.createElement('span');
			var nodoError = document.createTextNode('Su contraseña no puede ser password,123456 o 098754');
			etiqueta.appendChild(nodoError);
			contenedorAlert.appendChild(etiqueta);
			return false;
		}
		else {
			return true;
		}
	}
}
contraseña();
//funcion que regresa un valor de una seleccion y tira una alerta si no hay ninguna opción seleccionada.
function seleccion() {
	var indice = document.getElementsByTagName('select')[0].selectedIndex;
	if( indice == null || indice === 0 ) {
		alert ("Debe elegir una de las opciones");
		return false;
	}else {
		return true;
	}
}
seleccion();
}


