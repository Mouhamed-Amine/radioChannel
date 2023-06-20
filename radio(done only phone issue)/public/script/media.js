class media{
constructor(){

this.mosaique=document.getElementById('tag1');
this.quran=document.getElementById('tag2');
this.radioalgerian=document.getElementById('tag3');
this.tunisradio=document.getElementById('tag5');
this.radiomarocain=document.getElementById('tag7');
this.musiclist=document.getElementById('tag6');


this.audiofile=document.getElementById("audio_file");
this.channel=document.getElementById("channel");
this.testplayer;
this.playpause=document.getElementById("play_pause");
this.playpause.addEventListener("click",()=>{
this.playpauseF();
});

this.channelname=[];
this.channelname[0]="TUN 1 Live channel 1";
this.channelname[1]="Arizoona ";
this.channelname[2]="Quran فقه الديانات";
this.channelname[3]=" IFM  ";
this.channelname[4]="Mosaique TN channel 4";
this.channelname[5]=" MedRadio channel 5 ";
this.channelname[6]="Nisekoi ClariS ";
this.channelname[7]="[NCS Release]";
this.channelname[8]="Hussain jasmi";

this.channelsource=[];
this.channelsource[0]="http://rtstream.tanitweb.com/nationale";
this.channelsource[1]="mp3/arizona1.mp3";
this.channelsource[2]="https://radioendirect.net/stream/8960";
this.channelsource[3]="https://live.ifm.tn/radio/8000/ifmlive?1585267848";
this.channelsource[4]="https://radio.mosaiquefm.net/mosalive";
this.channelsource[5]="";
this.channelsource[6]="mp3/ClariS -「Click」 (Nisekoi ニセコイ Season 1 Opening Theme - Full Ver.) [KANROMENG Lyrics].mp3";
this.channelsource[7]="mp3/Tobu - Turn It Up [NCS Release].mp3";
this.channelsource[8]="mp3/Hssain.mp3";
this.serverchange=0;
this.setresource();


this.mosaique.addEventListener("click",()=>{
this.channel.innerHTML=this.channelname[4];
this.audiofile.src=this.channelsource[4];
this.playpauseF();
});

this.tunisradio.addEventListener("click",()=>{
    this.channel.innerHTML=this.channelname[0];
    this.audiofile.src=this.channelsource[0];
    this.playpauseF();
    });

this.radioalgerian.addEventListener("click",()=>{
this.channel.innerHTML=this.channelname[2];
this.audiofile.src=this.channelsource[2];
this.playpauseF();
});

this.radiomarocain.addEventListener("click",()=>{
this.channel.innerHTML=this.channelname[5];
this.audiofile.src=this.channelsource[5];
this.playpauseF();
});

this.musiclist.addEventListener("click",()=>{
this.channel.innerHTML=this.channelname[6];
this.audiofile.src=this.channelsource[6];
this.playpauseF();
});   

                 


this.quran.addEventListener("click",()=>{
this.channel.innerHTML=this.channelname[3];
this.audiofile.src=this.channelsource[3];
this.playpauseF();
});

document.getElementById("suivplay").addEventListener("click",()=>{
    console.log(this.serverchange);
if(this.serverchange<this.channelsource.length-1){
   ++this.serverchange;
   this.testplayer=false;
   
}
else{
    this.serverchange=0;
}
localStorage.setItem("Savepoint",this.serverchange);
this.setresource();
});



document.getElementById("prevplay").addEventListener("click",()=>{
    console.log(this.serverchange);
if(this.serverchange>0){
  --this.serverchange;
  this.testplayer=false;
}else{
    this.serverchange=this.channelsource.length-1;
}
localStorage.setItem("Savepoint",this.serverchange);
this.setresource();
});
    

}

setresource(){
    if(localStorage.getItem("Savepoint")!=null){
        this.serverchange=localStorage.getItem("Savepoint");
    }
this.audiofile.src=this.channelsource[this.serverchange];
this.channel.innerHTML=this.channelname[this.serverchange];
this.playpauseF();
}

playpauseF(){
if(this.testplayer==false){
    this.playpause.src="./img/pause.png";
    this.audiofile.play();
    this.testplayer=true;
}else{
    this.playpause.src="./img/play.png";
    this.audiofile.pause();
    this.testplayer=false;
}
}

}
onload=new media();