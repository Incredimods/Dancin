/** 💃🏻 **/
var app=new function(){this.name="Dancin",this.version="1",this.date="2024",this.folder="asset-v1/",this.looptime=8000,this.bpm=80,this.totalframe=384,this.nbpolo=7,this.nbloopbonus=3,this.bonusloopA=!0,this.bonusendloopA=!0,this.recmaxloop=68,this.recminloop=4,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepicto="game-picto.png",this.colBck="#0d0446",this.col0="#d81c88",this.col1="#ac1c64",this.col2="#94047d",this.col3="#63046d",this.col4="#2b0464",this.animearray=[{name:"1_Kevin B'Ball",color:"f35c7c",uniqsnd:!0},{name:"2_Harry DownDown",color:"2bdad3",uniqsnd:!0},{name:"3_Lil Box",color:"2bdad3",uniqsnd:!0},{name:"4_Mac D Marco",color:"f35c7c",uniqsnd:!0},{name:"5_Projector",color:"d5b79c",uniqsnd:!0},{name:"6_Manfred Mann",color:"f35c7c",uniqsnd:!0},{name:"7_Disco Ball",color:"2bdad3",uniqsnd:!1},{name:"8_Who Voi' D",color:"bb6ccb",uniqsnd:!0},{name:"9_Danny Moves",color:"f35c7c",uniqsnd:!1},{name:"10_Martin Lee",color:"d5b79c",uniqsnd:!0},{name:"11_Plim Bim Don",color:"f35c7c",uniqsnd:!0},{name:"12_Skelomeloo",color:"2bdad3",uniqsnd:!1},{name:"13_Dancin' Revolux",color:"fcb434",uniqsnd:!1},{name:"14_Teevy Philip",color:"d5b79c",uniqsnd:!0},{name:"15_Cel' Natural",color:"fcb434",uniqsnd:!1},{name:"16_Amazing polo",color:"d5b79c",uniqsnd:!1},{name:"17_Betwan Headbanger",color:"2bdad3",uniqsnd:!1},{name:"18_Masquerade Queen",color:"fcb434",uniqsnd:!0},{name:"19_Edward Johnme",color:"fcb434",uniqsnd:!1},{name:"20_Newin Minut",color:"f35c7c",uniqsnd:!0}],this.bonusarray=[],this.unlockerarray=[];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n].name;this.animearray[n].soundA=a+"_a",this.animearray[n].soundB=this.animearray[n].uniqsnd?a+"_a":a+"_b",this.animearray[n].anime=a+"-sprite.png",this.animearray[n].animeData=a+".json"}};