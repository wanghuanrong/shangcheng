function $my(id){
    return document.getElementById(id);
}


$my("q").onfocus=function(){
    $my("tags").style.display="none";
    // alert("消失");
    $my("hot").style.display="block";
}
$my("q").onblur=function(){
    $my("tags").style.display="block";
    // alert("消失");
    $my("hot").style.display="none";
}


