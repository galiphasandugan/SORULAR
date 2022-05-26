let num1 = Number(prompt("enter first number: "));
let num2 = Number(prompt("enter first number: "));

function add(nım1,num2,operator){
    let result;
    if(operator==='+'){
        result = num1+num2;
        return result;
    }else{
    alert(`pls,operator should be -`);
    }
}


function minus(nım1,num2,operator){
    let result;
    if(operator==='-'){
        result = num1-num2;
        return result;
    }else{
    alert(`pls,operator should be -`)
    }
}


function divide(nım1,num2,operator){
    let result;
    if(operator==='/'){
        result = num1/num2;
        return result;
    }else{
    alert(`pls,operator should be -`)
    }
}


function add(nım1,num2,operator){
    let result;
    if(operator==='*'){
        result = num1*num2;
        return;result;
    }else{
    alert(`pls,operator should be -`)
    }
}

let operator =prompt('enter your operator: ')
function process(){
    if(operator== '+'){
        return add(num1,num2,operator);
    }
    if(operator== '-'){
        return minus(num1, num2, operator);
    }
    if(operator== '/'){
        return divide(num1, num2, operator);
    }
    if(operator== '*'){
        return multiple(num1, num2, operator);
    }
    else{
        alert('pls ,try again')
    }
}

   

console.log(process());
document.write(add(num1, num2, operator));


// const power =(num1,num2) => (num1 ** num2);
// console.log((num1, num2) => num1 ** num2);
