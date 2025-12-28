    // <select id="operation">
    //     <option value="add">addition</option>
    //     <option value="sub">subtraction</option>
    //     <option value="multi">multiplication</option>
    //     <option value="div">division</option>
const operation=document.getElementById('operation');
const num1=document.getElementById('num1');
const num2=document.getElementById('num2');

document.getElementById('start').addEventListener('click',function(){
    let result;
    const val1=Number(num1.value);
    const val2=Number(num2.value);
    switch(operation.value){
        case 'add':
            result=val1+val2;
            break;
        case 'sub':
            result=val1-val2;
            break;
        case 'multi':
            result=val1*val2;
            break;
        case 'div':
            result=val1/val2;
            break;
    }
    document.getElementById('result').textContent="Result: "+result;
});
