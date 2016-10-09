// console.log('Loaded!');


var list ='';
submit_name.onclick=function(){
  var nameInput = document.getElementById('name').value;
  var request  = new XMLHttpRequest();
    request.onreadystatechange =function(){
        console.log(request,"###")
        if(request.readyState===XMLHttpRequest.DONE){
             if(request.status === 200){
                var names = request.responseText;
                names=JSON.parse(names);
                var list ='';
                var name_list =document.getElementById('unorderlist')
               for(var i=0;i<names.length;i++){
                  list+='<li>'+names[i]+'</li>';
                }
                name_list.innerHTML=list;
            }
        }
    }
    //make the request
    request.open('GET','http://hari70a.imad.hasura-app.io/submit_name?name='+nameInput,true)
    request.send(null);
};
var submit = document.getElementById('submit_btn')
submit.onclick=function(){
    //create a request obj
    var request  = new XMLHttpRequest();
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
