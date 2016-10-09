console.log('Loaded!');

var submit = document.getElementById('submit_btn')
var counter =0;
submit.onclick=function(){
    console.log("INN")
    counter=counter+1;
    var span = document.getElementById('span')
    span.value = counter.toString();
};