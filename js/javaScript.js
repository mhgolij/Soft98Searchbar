let input = document.getElementsByTagName('input');
let secDiv = document.getElementById('second-div');
let cover = document.getElementById('cover');
let f = false;
let form = document.getElementsByTagName('form')
let searchIcon = document.getElementById('searcIcon');

changeInput = () =>{
    if(input[0].value){
        cover.style.bottom = "100%"
        secDiv.style.bottom= "-324px";
        secDiv.style.borderTop = "1px solid red";
        secDiv.style.padding = "20px"
        secDiv.style.paddingTop = "0"
    }else{
        secDiv.style.bottom= "0";
        secDiv.style.borderTop = "none";
        secDiv.style.padding = "0"
        secDiv.style.paddingTop = "0"
    }
}
focusIn = () =>{
    f = true;
    if(input[0].value){
        console.log("1");
    }else{
        cover.style.bottom = "100%"
    }
}
focusOut = () =>{
    f = false;
    if(input[0].value){
        console.log("1");
    }else{
        cover.style.bottom = "0"
    }
}
mouseIn = ()=>{
    cover.style.bottom = "100%"
}
mouseOut = ()=>{
    if(!f){
        cover.style.bottom = "0"
    }
}
searchClick = ()=>{
    searchIcon.style.opacity = "0"
    setTimeout(formDisplay,1000);
}
formDisplay = () =>{
    setTimeout(formOpacity,100);
    form[0].style.display = "block"
}
formOpacity = ()=>{
    form[0].style.opacity = "1"
}