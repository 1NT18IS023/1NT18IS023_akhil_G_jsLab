var par = document.getElementById('result')
var sub = document.getElementById('submit')
var fname = document.getElementById('fname')
var lname = document.getElementById('lname')
sub.addEventListener('click',()=>{

    par.innerText = "Welcome "+fname.value+" "+lname.value

})

