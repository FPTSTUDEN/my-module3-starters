function simplecalculator(expression){
    switch (true){
        case expression.includes('+'):
            {
                const numbers=expression.split('+').map(Number);
                return numbers[0]+numbers[1];
            }
        case expression.includes('-'):
            {
                const numbers=expression.split('-').map(Number);
                return numbers[0]-numbers[1];
            }
        case expression.includes('*'):
            {
                const numbers=expression.split('*').map(Number);
                return numbers[0]*numbers[1];
            }
        case expression.includes('/'):
            {
                const numbers=expression.split('/').map(Number);
                return numbers[0]/numbers[1];
            }
        default:
            return NaN;
    }
}

document.getElementById('start').addEventListener('click',function(){
    const expr=document.getElementById('calculation').value;
    const result=simplecalculator(expr);
    document.getElementById('result').textContent="Result: "+result;
});