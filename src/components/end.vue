<template>
	<div id="end">
		<h1>{{total}}</h1>
		<p><span @click="resit">补考</span> <span @click="share">晒成绩</span></p>
	</div>
</template>

<script>
	export default{
		name:"end",
		data(){
			return {
				total:0
			}
		},
		mounted(){
			this.total=this.$store.state.sort
			console.log(this.$store.state.sort)
		},
		methods:{
			resit(){
				this.$router.push("/start")
			},
			share(){
				alert("点击又上角分享给朋友")
			}
		}
	}
</script>

<style>
	#app{
		width: 100%;
		height: 100%;
	}
	#end{
		width: 100%;
		height: 100%;
		background: url("../assets/ending.png") ;
  		background-size: 100% 100%;
  		position: relative;
	}
	h1{
		position: absolute;
		top: 126px;
   		left: 263px;
   		font-style: italic;
   		color: red;
	}
	
	#end p{
		position: absolute;
		bottom: 148px;
		margin-left: 105px;
		width: 100%;
		opacity: 0;
	}
	p span{
			display: inline-block;
			width: 81px;
			text-align: center;
		}
	p span:nth-of-type(1){
		margin-right: 10px;	
	}
	p span:nth-of-type(2){
		margin-left: 30px;
	}
</style>