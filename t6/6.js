///opens an alert window that says 'Button Clicked' when the <button> element is clicked
const button=document.querySelector('button');
button.addEventListener('click',function(){
    alert('Button Clicked');
});