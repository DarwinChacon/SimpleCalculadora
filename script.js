function agregarNumero(valor){
    document.getElementById('pantalla').value += valor;
};

function borrarNumero(){
    document.getElementById('pantalla').value = '';
};

function calcularNumero(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}