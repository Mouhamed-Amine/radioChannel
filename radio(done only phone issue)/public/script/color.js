class color{
constructor(){
this.color1=document.getElementById("color1");
this.color1.addEventListener("click",()=>{
    this.setcolor("color1");

});
this.color2=document.getElementById("color2");
this.color2.addEventListener("click",()=>{
    this.setcolor("color2");

});
this.color3=document.getElementById("color3");
this.color4=document.getElementById("color4");
this.color3.addEventListener("click",()=>{
    this.setcolor("color3");

});
this.color4.addEventListener("click",()=>{
    this.setcolor("color4");

});
if(localStorage.getItem("color")==null){
    document.body.style.background="red";
}
this.setcolor(localStorage.getItem("color"));


}

setcolor(color){
    if(color=="color1"){
        document.body.style.background="#2e5553";
        document.querySelector('.mixer__modify').style.background="#2e5553";
        document.querySelector('.mixer__modify2').style.background="#2e5553";

    }
    else if(color=="color2"){
        document.body.style.background="#175c8d";
        document.querySelector('.mixer__modify').style.background="#175c8d";
        document.querySelector('.mixer__modify2').style.background="#175c8d";

    }
    else if(color=="color3"){
        document.body.style.background="#7f5a83";
        document.querySelector('.mixer__modify').style.background="#7f5a83";
        document.querySelector('.mixer__modify2').style.background="#7f5a83";

    }
    else if(color=="color4"){
        document.body.style.background="#a188a6";
        document.querySelector('.mixer__modify').style.background="#fff";
        document.querySelector('.mixer__modify2').style.background="#fff";

    }
    localStorage.setItem("color",color);
}


}
onload=new color();