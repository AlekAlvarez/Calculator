let Operand1=undefined;let Operator=undefined;
let Operand2=undefined;
function add(Addend1,Addend2){
    let sum=Addend1+Addend2;
    if(isNaN(sum))return NaN;
    return sum;
}
function subtract(minuend,subtrahend){
    let difference=minuend-subtrahend;
    return difference;
}
function multiply(multiplicand, multipier){
    let product=multiplicand*multipier;
    return product;
}
function divide(dividend,divisor){
    let quotient=dividend/divisor;
    return quotient;
}
function operate(){
    if(isNaN(Operand1)||isNaN(Operand2)){
        return "Error";
    }
    switch(Operator){
        case '+':
            return add(Operand1,Operand2);
        case '-':
            return subtract(Operand1,Operand2);
        case '*':
            return multiply(Operand1,Operand2);
        case '/':
            return divide(Operand1,Operand2);
        default:
            return "Error";
    }
}