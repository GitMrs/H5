import Vue from 'vue'
import VueRouter from "vue-router"
import axios from "axios"
import Vuex from "vuex"
import App from './App.vue'
import Start from "./components/start.vue"
import Content from "./components/content.vue"
import  Ending from "./components/end.vue"
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.prototype.$http = axios
const routes = [
		{
			path:"/",
			redirect:{
				name:"start"
			}
		},
		{
			path:"/start",
			name:"start",
			component:Start
		},
		{
			path:"/content",
			name:"content",
			component:Content
		},
		{
			path:"/end",
			name:"end",
			component:Ending
		},
		
]
const router = new VueRouter({
		routes
})
const store = new Vuex.Store({
	state:{
		data:[],
		sort:0
	}
})

new Vue({
   el: '#app',
   router,
   store,
   render: h => h(App),
   mounted(){
  	 	this.$http.get("./src/server/data.json").then((data)=>{
	  		store.state.data=data
	  		console.log(data)
  		})
  }
})
