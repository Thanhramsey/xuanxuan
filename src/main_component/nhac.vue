<template>
 <div class="nhaccontainer">
  <v-row>
    <v-spacer></v-spacer>
    <v-col class="col-md-4">
	  <v-btn icon color="red" v-on:click="previous" class="mr-2">
        <v-icon>mdi-skip-previous</v-icon>
      </v-btn>
      <v-btn icon color="red"v-on:click="play" >
        <v-icon ref="play_pause">{{icon}}</v-icon>
      </v-btn>
      <v-btn class="ml-2" icon color="red" v-on:click="next" >
        <v-icon>mdi-skip-next</v-icon>
      </v-btn>
	    <audio controls id="audio_id" style="display:none" autoplay>
			<source src = "../assets/songs/music.mp3"
			id="audio" type="audio/mpeg">
			Your browser does not support the audio element!
		</audio>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
  <v-row>
	   <v-spacer></v-spacer>
		<v-col  class="col-md-4">
			<p class="song-name">{{baiDangChoi}}</p>
		</v-col>
	    <v-spacer></v-spacer>

  </v-row>
 </div>
</template>

<script lang="js">
import Vue from "vue";
import sound1 from '../assets/songs/music1.mp3'
import sound from '../assets/songs/music.mp3'
import divenha from '../assets/songs/divenha.mp3'
import khucgiaomua from '../assets/songs/khucgiaomua.mp3'
import khucxuan from '../assets/songs/khucxuan.mp3'
import mnmba from '../assets/songs/mnmba.mp3'
import music_mashup from '../assets/songs/music_mashup.mp3'
import mxdautien from '../assets/songs/mxdautien.mp3'
import nangxuan from '../assets/songs/nangxuan.mp3'
import xdvremix from '../assets/songs/xdvremix.mp3'
import xuandave from '../assets/songs/xuandave.mp3'

export default Vue.extend({
  name: "boi",
  components: {
  },
  data() {
    return {
		songArray:[sound,sound1],
		icon: "mdi-play",
		baiDangChoi:'Ngày xuân Long Phụng sum vầy',
		songArr:[
			{file:sound,name:'Ngày xuân Long Phụng sum vầy'},
			{file:sound1,name:'Con bướm xuân'},
			{file:divenha,name:'Đi về nhà'},
			{file:khucgiaomua,name:'Khúc giao mùa'},
			{file:khucxuan,name:'Khúc xuân'},
			{file:mnmba,name:'Một Năm mới bình an'},
			{file:music_mashup,name:'mash up xuân'},
			{file:mxdautien,name:'Mùa xuân đầu tiên'},
			{file:nangxuan,name:'Nàng xuân'},
			{file:xdvremix,name:'Xuân đã về remix'},
			{file:xuandave,name:'Xuân đã về'},
		],
		index:0
	};
  },
  created(){
  },
  mounted(){
	   var a=document.getElementById("audio_id");
	   let self= this;
	   a.addEventListener('ended', function(){
		   	self.next();
	   });
  },
  computed: {},
  methods: {
    play: function (e) {
      var a = document.getElementById('audio_id');
	  console.log(this.$refs.play_pause);
      if (a.paused) {
        a.play();
		this.icon = "mdi-play";
      } else {
        a.pause();
		this.icon = "mdi-pause";
      }
    },
	next: function (e) {
      var a = document.getElementById('audio_id');
	  if(this.index == this.songArr.length-1 ){
		  this.index = 0;
		  a.src = this.songArr[this.index].file;
		  this.baiDangChoi = this.songArr[this.index].name;
		  a.load();
		  a.play();
	  }else{
		  this.index ++;
		  a.src = this.songArr[this.index].file;
		  this.baiDangChoi = this.songArr[this.index].name;
		  a.load();
		  a.play();
	  }
    },
	previous: function (e) {
      var a = document.getElementById('audio_id');
	  if(this.index == 0 ){
		  this.index = this.songArr.length - 1;
		  a.src = this.songArr[this.index].file;
		  a.load();
		  a.play();
	  }else{
		  this.index --;
		  a.src = this.songArr[this.index].file;
		  a.load();
		  a.play();

	  }
    },
  },
});
</script>

<style lang="scss">
@import "../styles/bootstrap-grid.min.css";
@import "../app.scss";

.song-name{
	color: yellow;
    font-size: larger;
    font-style: italic;
    font-family: cursive;
}
.nhaccontainer button{
	background-color:lightgrey !important
}
</style>