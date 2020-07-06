var nome = prompt('Il tuo nome nome?');

var cognome = prompt('Il tuo cognome e?');

var colore = prompt('il tuo colore prefito e?')

var numero = Math.floor(Math.random() * 323818320) + 9203213921;  

var tooshort = true;

var noLetters = false;

var letters = /^[A-Za-z]+$/;

document.getElementById("titolo").innerHTML = "Password generator"

var password = nome + cognome + colore + numero;

// controllo per vedere se cio che hai inserito e piu lungo di tre caratteri
if(nome.length < 3 || cognome.length  < 3 || colore.length < 3){
    tooshort  = false;
}
// controllo per vedere se quello che hai inserito sono delle lettere
if (nome.match(letters)){
    noLetters = true;
 }

if(tooshort != false && noLetters != false){
    document.getElementById("password").innerHTML = "La tua password a prova di bomba e: "+ password;
}else{
  alert("I valori inseriti non sono corretti");
  location.reload();
}

