function soma(num1, num2) {
    return num1 + num2;
}

const subtrai = (num1, num2) => {
    return num1 - num2;
}

function multiplica(num1, num2) {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 / num2;
}

function mostraResultado(num1, num2) {
    console.log(`Soma entre ${num1} e ${num2}:`, soma(num1, num2));
    console.log(`Substração entre ${num1} e ${num2}:`, subtrai(num1, num2));
    console.log(`Multiplicação entre ${num1} e ${num2}:`, multiplica(num1, num2));
    console.log(`Divisão entre ${num1} e ${num2}:`, divide(num1, num2));
}

mostraResultado(10,5);