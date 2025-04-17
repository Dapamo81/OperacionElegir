function sumar(a,b){
    const res = a+b;
    mostrarResultado("La suma es:" + res);
}

function calcular(){
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const oper = document.getElementById("operacion").value.trim();

    if(isNaN(num1) || isNaN(num2)){
        mostrarResultado("Por favor, ingresa números válidos.");
        return;
    }

    if(oper === "+"){
        sumar(num1,num2);
    }else{
        mostrarResultado("Operación no válida. Usa + o -.")
    }

}