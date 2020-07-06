var nome = prompt('Il tuo nome nome?');

var cognome = prompt('Il tuo cognome e?');

var colore = prompt('il tuo colore prefito e?')

var numero = Math.floor(Math.random() * 323818320) + 9203213921;  

var password = nome + cognome + colore + numero;
if(nome != "" && cognome != "" && colore != ""){
    document.getElementById("password").innerHTML = "La tua password a prova di bomba e:  " + password;
}else{
  alert("Iserisci un valore nei campi");
  location.reload();
}

document.getElementById("titolo").innerHTML = "Password Generator";

// chiedi all'itente nome cognome colore preferito e un numero;
