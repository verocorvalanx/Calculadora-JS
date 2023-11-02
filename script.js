function agregar(valor){
    document.getElementById('pantallaInput').value += valor;
}


function borrar(){
    document.getElementById('pantallaInput').value = '';
}

function calcular(){
    const valorPantalla = document.getElementById('pantallaInput').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantallaInput').value = resultado;
}