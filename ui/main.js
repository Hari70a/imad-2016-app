console.log('Loaded!');

var submit = document.getElementById('submit_btn')
submit.onclick=function(){
    console.log("INNNN")
    var request  = new XMLHttpRequest();
     console.log(request,"sbf","INNNN")
    request.onreadystatechange =function(){
        console.log(request,"###")
        if(request.readyState===XMLHttpRequest.DONE){
             console.log(request,"###")
             if(request.status === 200){
                var counter = request.responseText
                var span = document.getElementById('span')
                span.innerHTML = counter.toString();             
                 
            }
        }
    }
    
};
