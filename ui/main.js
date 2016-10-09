console.log('Loaded!');
var image = document.getElementById('madi_img');
var marginLeft=0;
function shiftImageRight(){
    marginLeft= marginLeft+5;
    image.style.marginLeft =marginLeft+'px';
}
image.onclick=function(){
    setInterval(shiftImageRight,50)
};
var submit = document.getElementById('submit_btn')
var counter =0;
submit.onclick=function(){
    counter= counter+1;
    console.log(counter,"####")
};