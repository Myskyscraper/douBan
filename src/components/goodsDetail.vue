<template>
	
	<div class="banner-img">

		

		<div class="banner">
			
			{{this.gname}}
		</div>
		
	

	</div>


</template>


<script>
	
	import router from '../router'
	export default {
		name:"goodsDetail",
		data(){
			return {
				gname:null
			}

		},
		created(){
			
			this.$nextTick( ()=>{
				this.recePro()
			})
		},

		methods:{

			recePro(){

				//var xxx= this.$route.query.id;
				  var xxx = this.$route.query.shopdeta;
				  var aaa = "窦国杰"
				  this.gname = xxx.goodsName;
			
			}


		}
	}
	


</script>


<style scoped lang="less">
	*{margin: 0;padding: 0;}
	li{list-style: none;}
	




</style>