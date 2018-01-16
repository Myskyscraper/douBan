import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import HelloWorld from '@/components/HelloWorld'

import Book from '@/components/Book'



Vue.use(Router)



export default new Router({
	routes: [{
		path: '/',
		name: 'Book',
		component: Book
	}]

})