<template>
    <div id="content">
      <div class="img">
        <img :src=img alt="">
      </div>
      <div class="question">
          {{title}}
      </div>
      <ul class="answer">
        <li v-for="(x,index) in data" @click="Fn(index)">{{x}}</li>
      </ul>
  </div>

</template>

<script>
export default {
  name: 'content',
  data(){
  	return {
  		data:[],
  		title:"",
  		img:"",
  		right:"",
  		count:0,
  		sort:0
  	}
  },
  mounted(){
	this.upData(this.count)
  	  console.log(this.$store.state.data.data.question)
  },
  methods:{
  	Fn(x){
  		console.log(this.count)
  		if(x==this.right){
  			this.sort+=20
  		}
		if(this.count>8){
			this.$store.state.sort = this.sort
			this.$router.push("/end")
			this.count=9
		}else{
			this.count++
			this.upData(this.count)
		}
  	},
  	upData(count){
  		this.title=this.$store.state.data.data.question[count].name
		this.data=this.$store.state.data.data.question[count].result.list
		this.img=this.$store.state.data.data.question[count].img
		this.right=this.$store.state.data.data.question[count].result.right
  	}
  }
}

</script>

<style>
html,body{
  width:100%;
  height: 100%;
  font-style: 62.5%;
}
#content {
  width:100%;
  height: 100%;
  background: url("../assets/1.png") ;
  background-size: 100% 100%;
  position: relative;
}
.img{
  width:60%;
  height:30%;
  position: absolute;
  left: 25%;
  top:15%;
}
.img img{
  width:100%;
  height:100;
}
.question{
    position: absolute;
    width:60%;
    height:125px;
    left: 23%;
    top:45%;
    line-height:30px;
    margin-top: 49px;
}
.answer{
  	position: absolute;
  	width:60%;
    left: 25%;
    top:62%;
    list-style: none;

}
.answer li{
  width:100%;
  height:40px;
  line-height: 40px;
  margin-top: 10px;
  margin-left: 44px;
  /*background: red;*/
}


</style>

