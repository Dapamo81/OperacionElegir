function sumar(a,b){
    const res = a+b;
    // mostrarResultado("La suma es: " + res);
    return res;
}
function restar(a,b){
    const res = a-b;
    // mostrarResultado("La resta es: " + res);
    return res;
}

function mostrarResultado(mensaje) {
    document.getElementById('resultado').textContent = mensaje;
}

function calcular(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const oper = document.getElementById("operacion").value.trim();

    if(isNaN(num1) || isNaN(num2)){
        mostrarResultado("Por favor, ingresa números válidos.");
        return;
    }
    
    let resultado;

    if(oper === "+"){
        //sumar(num1,num2);

        resultado = sumar(num1,num2);
        mostrarResultado("La suma es: " + resultado)

    }else if (oper === "-"){
        // restar(num1,num2);

        resultado = restar(num1,num2);
        mostrarResultado("La resta es: " + resultado)

    }else{
        mostrarResultado("Operación no válida. Usa + o -.")
    }

}