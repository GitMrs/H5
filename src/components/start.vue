<template>
  <div id="start">
      <p class="tel"><input type="text" placeholder="请输入手机号码"></p>
      <p class="pwd"><input type="password" placeholder="请输入密码"></p>
      <p class="login"><router-link to="/content">立即登录</router-link></p>  
  </div>

</template>

<script>

export default {
  name: 'start',
  methods:{
   
  }
}

</script>

<style>
#app{
	width: 100%;
	height: 100%;
}
#start {
  width:100%;
  height: 100%;
  background: url("../assets/start.png");
  background-size: 100% 100%;
  position: relative;
}
 img{
  width:100%;
  height: 100%;
}
 p{
  width:40%;
  height: 40px;
  position: absolute;
}
.tel{
  left:190px;
  top:58%;
}
.pwd{
  left:190px;
  top:67%;
}
 p input{
  width:100%;
  height: 100%;
  display: inline-block;
  border:none;
  font-size:16px;
  outline: none;
  margin-top: 10px;
}
.login{
  left:190px;
  top:75%;
  width:50%;
  opacity: 0;
}
.login a{
  width:100%;
  height: 100%;
  display: inline-block;
}
</style>

