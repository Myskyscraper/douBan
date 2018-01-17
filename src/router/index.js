import Vue from 'vue'
import Router from 'vue-router'
import Axios from 'axios'


import HelloWorld from '@/components/HelloWorld'

import Book from '@/components/Book'

import Music from '@/components/Music'

import Test from '@/components/Test'


Vue.use(Router);


export default new Router({

	routes: [{
			path: '/user/01',
			component: Music
		}, {
			path: "/user/02",
			component: Book
		}, {
			path: '/',
			redirect: '/user/01'
		}

	]

})