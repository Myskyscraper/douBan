import Vue from 'vue'

import Router from 'vue-router'



import HelloWorld from '@/components/HelloWorld'

import Book from '@/components/Book'

import Music from '@/components/Music'

import goodsDetail from '@/components/goodsDetail'

import Test from '@/components/Test'



Vue.use(Router);



export default new Router({

	routes: [{
			path: '/user/01',
			component: Book
		}, {
			path: "/user/02",
			component: Music
		}, {
			path: '/',
			redirect: '/user/01'
		}, {
			path: '/user/03',
			component: goodsDetail
		}

	]

})