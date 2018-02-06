<template>
	
	<div class="goodsDetBox">


		<div class="img_wrap">
			<img v-bind:src="this.gimg" alt="">
		</div>
		
		

		<div class="good-name">
			{{this.gname}}
		</div>

		<div class="good-peize">
			￥{{this.gprize}}
		</div>
		
		<div class="good-discount">
			限时折扣{{this.gDiscou}}
		</div>
	
		<div class="cartBtn">
			加入购物车
		</div>

	</div>


</template>


<script>
	
	import router from '../router'
	export default {
		name:"goodsDetail",
		data(){
			return {
				gname:null,
				gimg:null,
				gprize:null,
				gDiscou:null	
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
				  this.gimg = xxx.goodsListImg;
				  this.gprize = xxx.price;
				  this.gDiscou = xxx.discount;
				  console.log(this.gimg);
			}


		}
	}
	


</script>


<style scoped lang="less">
	*{margin: 0;padding: 0;}
	li{list-style: none;}
	.goodsDetBox{
		font-size: 14px;
		.img_wrap{
			width: 100%;
			
			img{
				display: block;
				margin: 30px auto;
			}
		}

		.cartBtn{
			position: fixed;
			width: 50%;
			height: 30px;
			background: #FE3B2F;
    		color: #fff;
    		text-align: center;
    		line-height: 30px;
    		right: 20px;
    		bottom: 20px;
		}

	}
	




</style>