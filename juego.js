function iniciarJuego() {
    var numeroSecreto = Math.floor(Math.random() * 5) + 1;
    var intentos = 2;

    while (intentos > 0) {
        var respuesta = prompt("Adiviná el número secreto (entre 1 y 5). Intentos restantes: " + intentos);

        if (respuesta == numeroSecreto) {
            alert("¡ADIVINASTE EL NUMERO MI AMORR, TE GANASTE MUCHOS BESITOS!");
            return;
        } else {
            alert("Fallaste bichito de lu. Intentá de nuevo.");
            intentos--;
        }
    }

    alert("No tenés más intentos che. El número secreto era: " + numeroSecreto);
}


// Genera un número aleatorio entre 1 y 100
var numeroSecreto = Math.floor(Math.random() * 100) + 1;

// Obtiene la entrada de texto y el elemento de resultado del HTML
var entradaNumero = document.getElementById("entrada-numero");
var resultado = document.getElementById("resultado");

// Función que se llama cuando se hace clic en el botón "Comprobar"
function comprobarNumero() {
    // Obtiene el número introducido por el usuario y lo convierte en un número entero
    var numeroIntroducido = parseInt(entradaNumero.value);

    // Comprueba si el número introducido es igual al número secreto
    if (numeroIntroducido === numeroSecreto) {
        resultado.textContent = "¡MUY BIEN MI AMOR, ERA ESE!";
    } else if (numeroIntroducido < numeroSecreto) {
        resultado.textContent = "El número secreto es mayor que " + numeroIntroducido;
    } else if (numeroIntroducido > numeroSecreto) {
        resultado.textContent = "El número secreto es menor que " + numeroIntroducido;
    }

    // Borra el número introducido por el usuario
    entradaNumero.value = "";
}
