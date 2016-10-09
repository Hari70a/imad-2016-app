console.log('Loaded!');

var submit = document.getElementById('submit_btn')
submit.onclick=function(){
    console.log("INNNN")
    //create a request obj
    var request  = new XMLHttpRequest();
     console.log(request,"sbf","INNNN")
    request.onreadystatechange =function(){
        console.log(request,"###")
        if(request.readyState===XMLHttpRequest.DONE){
             console.log(request,"###")
             if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('span')
                span.innerHTML = counter.toString();             
                 
            }
        }
    }
    //make the request
    request.open('GET','http://hari70a.imad.hasura-app.io/counter',true)
    request.send(null);
    
};
