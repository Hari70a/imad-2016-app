console.log('Loaded!');
var image = document.getElementById('madi_img');
var marginLeft=0;
function shiftImageRight(){
    marginLeft= marginLeft+10;
    image.style.marginLeft =marginLeft+'px';
}
image.onclick = function () {
    setInterval(shiftImageRight,100)
};