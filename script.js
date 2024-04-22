let Operand1=undefined;
let Operator=undefined;
let Operand2=undefined;
let answer=undefined;
const one=document.querySelector("#one");const two=document.querySelector("#two"); 
const three=document.querySelector("#three");const four=document.querySelector("#four");
const five=document.querySelector("#five");const six=document.querySelector("#six");
const seven=document.querySelector("#seven");const eight=document.querySelector("#eight");
const nine=document.querySelector("#nine");const zero=document.querySelector("#zero");
const plus=document.querySelector("#plus");const minus=document.querySelector("#minus");
const mult=document.querySelector("#multiply"); const div=document.querySelector("#divide");
const display=document.querySelector("#Display span"); const equals=document.querySelector("#equal");
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
function getDisplayMessage(message=""){
    if(message!="")return message;
    if(Operand1!=undefined){
        message+=Operand1;
    }
    if(Operator!=undefined){
        message+=Operator;
    }
    if(Operand2!=undefined){
        message+=Operand2;
    }
        return message;
}
function populate(){
    if(answer!=undefined){
        display.innerText=answer;
    }
    else{
        display.innerText=getDisplayMessage();
    }
}

    function addNumToDisplay(num){
        if(Operator==undefined){
            if(Operand1==undefined){
                Operand1=0;
            }
            Operand1*=10;
            Operand1+=num*1;
        }
        else{
            if(Operand2==undefined){
                Operand2=0;
            }
            Operand2*=10;
            Operand2+=num*1;
        }
        populate();       
    }
    one.addEventListener("click",()=>{
        addNumToDisplay(1);
    });
    two.addEventListener("click",()=>{
        addNumToDisplay(2);
    });
    three.addEventListener("click",()=>{
        addNumToDisplay(3);
    });
    four.addEventListener("click",()=>{
        addNumToDisplay(4);
    });
    five.addEventListener("click",()=>{
        addNumToDisplay(5);
    });
    six.addEventListener("click",()=>{
        addNumToDisplay(6);
    });
    seven.addEventListener("click",()=>{
        addNumToDisplay(7);
    });
    eight.addEventListener("click",()=>{
        addNumToDisplay(8);
    });
    nine.addEventListener("click",()=>{
        addNumToDisplay(9);
    });
    zero.addEventListener("click",()=>{
        addNumToDisplay(0);
    });
    function addOperatorToDisplay(str){
        Operator=str;
        populate();
    }
    plus.addEventListener("click",()=>{
        addOperatorToDisplay("+");
    });
    minus.addEventListener("click",()=>{
        addOperatorToDisplay("-");
    });
    mult.addEventListener("click",()=>{
        addOperatorToDisplay("*");
    });
    div.addEventListener("click",()=>{
        addOperatorToDisplay("/");
    });
    equals.addEventListener("click",()=>{
        answer=operate();
        Operand1=answer;
        Operator=undefined;
        Operand2=undefined;
        populate();
    });