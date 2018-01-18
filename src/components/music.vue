<template>

	<div class="book_con">
		<div>音乐</div>

		<button >音乐</button><button>图书</button>

		<router-link to="/user/01">图书</router-link>
	</div>




</template>

<script type="text/javascript">
	import router from '.././router'

	export default {
		name:"Music",
		data(){
			return {
				title:"book"
			}

		}

	}






</script>


<style>
	button{
		margin: 20px 40px;
	}





</style>