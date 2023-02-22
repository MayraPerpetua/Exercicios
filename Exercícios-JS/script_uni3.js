var gTerra = 9.8;
var gMarte = 3.7;
var gJupter = 24.8; 

var peso = prompt("digite o peso do objeto na terra: "); 
var planeta = prompt ("digite o planeta (Marte ou Jupter)");
var pesofinal = 0; 

if (planeta == "Marte" || "marte") {

    var pesofinal = (peso/gTerra)*gMarte;
    document.writeln("o peso do objeto em marte é: " + pesofinal);

}
else if (planeta == "Jupter" || "jupter") {

    var pesofinal = (peso/gTerra)*gJupter;
    document.writeln("o peso do objeto em jupter é: " + pesofinal);

}else {

    document.writeln("não posso calcular o peso nesse planeta");

}




