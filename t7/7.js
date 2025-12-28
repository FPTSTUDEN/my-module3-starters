const trigger=document.getElementById('trigger');
///<img id="target" src="img/picA.jpg" alt="example">
const targetpic=document.getElementById('target');
trigger.addEventListener('mouseenter',function(){
    targetpic.src="img/picB.jpg";
});