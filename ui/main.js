console.log('Loaded!');

var submit = document.getElementById('submit_btn')
submit.onclick=function(){
    console.log("INNNN")
    var request  = new XMLHttpRequest();
    request.onreadystatechange =function(){
        console.log(request,"###")
        if(request.readyState===XMLHttpRequest.DONE){
             console.log(request,"###")
        }
    }
    var span = document.getElementById('span')
};
