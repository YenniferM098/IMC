function calcularIMC() {

    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;

    if (peso !== '' && altura !== '') {
        var imc = peso / ((altura / 100) ** 2);
        var resultado = document.getElementById('resultado');
        resultado.innerHTML = 'Su IMC es: ' + imc.toFixed(2);

        if (imc < 18.5) {
            resultado.innerHTML += ' - Su peso es bajo';
        } else if (imc < 25) {
            resultado.innerHTML += ' - Su peso es normal';
        } else if (imc < 30) {
            resultado.innerHTML += ' - Sobrepeso';
        } else {
            resultado.innerHTML += ' - Obesidad';
        }

    }

}