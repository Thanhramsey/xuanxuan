import Vue from 'vue'
//Dòng này để import vue-router
import Router from 'vue-router'
import Hello from '../components/FortuneWheel/Hello.vue'
import hehe from '../main_component/hehe.vue'
import boi from '../main_component/boi.vue'

Vue.use(Router)

export default new Router({
  routes: [ // bao gồm danh sách route
    {
      path: '/', ///path của route
      name: 'Hello', // tên route
      component: Hello // component route sử dụng
    },
	{
		path: '/hehe', ///path của route
		name: 'hehe', // tên route
		component: hehe // component route sử dụng
	  },
	{
		path: '/boi', ///path của route
		name: 'boi', // tên route
		component: boi // component route sử dụng
	},
  ]
})