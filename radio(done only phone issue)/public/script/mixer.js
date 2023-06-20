class mix{


constructor(){
    this.audiofile=document.getElementById("audio_file");
this.audiofile.volume=20/100;
this.volum=document.getElementById("volume");
this.volum.addEventListener("change",()=>{
this.audiofile.volume=this.volum.value/100;
});

this.vitess=document.getElementById("vitesse");
this.vitess.playbackRate=1;
this.vitess.addEventListener("change",()=>{
this.audiofile.playbackRate=this.vitess.value/100;
});
}
}
onload=new mix();