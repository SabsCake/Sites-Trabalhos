//CONFIGURANDO N° PARA APARECER NO RESUL
function insert(num) {
    var numero = document.getElementById('resul').innerHTML;
    document.getElementById('resul').innerHTML = numero + num;
}
//CONFIGURANDO O BOTÃO LIMPAR
function clean() {
    document.getElementById('resul').innerHTML = "";
}
//CONFICURANDO BOTÃO DE APAGAR 1
function back() {
    var resultado = document.getElementById('resul').innerHTML;
    document.getElementById('resul').innerHTML = resultado.substring(0, resultado.length - 1);
}
//CALCULANDO O RESULTADO
function calcular() {
    var resultado = document.getElementById('resul').innerHTML;
    if (resultado) {
        document.getElementById('resul').innerHTML = eval(resultado);
    } else {
        document.getElementById('resul').innerHTML = "Sem números."
    } //VERIFICAÇÃO 
}