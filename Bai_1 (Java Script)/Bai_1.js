function nom(){
    var s = document.getElementById("text-input").value;
    arr = s.split(" ");
    var i, kq = "", tmp;
    for( i= 0; i <arr.length; i++){
        tmp = arr[i].trim();
        if(tmp !=""){
            tmp = tmp.substr(0,1) +tmp.substr(1);
            kq += tmp + " ";
        }
    }
    document.getElementById("text-input").value = kq.trim();
}

function nom2(){
    var s = document.getElementById("text-input").value;
    arr = s.split(" ");
    var i;
    for(i = 0; i < arr.length; i++){
        if(s.length > 10){
            s = s.substr(0,1).toUpperCase(); 
        }
    }
    for(i = arr.length - 1; i >= 0; i--){
        if(s.length < 10){
            s = s.substr(0,1).toUpperCase(); 
        }
    }
}