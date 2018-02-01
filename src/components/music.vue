<template>

	<div class="music_con">
		<div class="music_title">影院热映</div>

		<div class="wrapper" ref="wrapper">

			<ul class="content">

				<li v-for="item in allGoods">

					<div class="item-img">
						<img v-bind:src="item.goodsListImg" alt="">
					</div>

					<div class="item-name">
						{{item.goodsName}}
					</div>

					<div class="item-discount">
						{{item.discount}}
					</div>

					<div class="item-class">
						{{item.className}}
					</div>

					<div class="item-prize">
						￥{{item.price}}
					</div>
				</li>
				
				
			</ul>
		</div>

		<div class="reback">
			<router-link to="/user/01">图书</router-link>
		</div>

	</div>



</template>

<script type="text/javascript">

	import BScroll from 'better-scroll'

	export default {
		name:"Music",
		data(){
			return {
				title:"book",
				allGoods:''
			}
		},
		created(){

			this.$axios({
					method:'get',
					url:' http://datainfo.duapp.com/shopdata/getGoods.php'
				 }).then(response =>{

				 	var rep = response.data;

				 	var callCon = rep.slice(9,-1);

					var obj = JSON.parse(callCon);

					console.log(obj);
					
					this.allGoods = obj;

					
				})

			this.$nextTick(() => {

				this.loadMore()
			})
		},
		mounted() {
  		
							
  		},
  		methods:{
			loadMore(){
				this.scroll = new BScroll(this.$refs.wrapper, {
					pullDownRefresh : {
					  threshold: 50, 
					  stop: 20
					},
					pullUpLoad : {
					  threshold: -20 
					}
				}),
			
				this.scroll.on('pullingDown', (pos) => {
					console.log('ok+2')
					this.scroll.finishPullDown()
				}),

				this.scroll.on('pullingUp', () => {
					console.log('ok+1')
					this.scroll.finishPullUp()
				})
				
				this.scroll.refresh()
  			

			}
  		}

	}






</script>


<style scoped lang="less">
	*{margin: 0;padding: 0;}
	li{list-style: none;}
	.music_con{
		.music_title{
			font-size: 16px;
			line-height: 24px;
			margin: 10px 0;
		}
		.wrapper{
			height: 500px;
			overflow: hidden;
			.content{
				height: 1500px;
				li{
					font-size: 0.24rem;
					color: red;
					text-align: center;	
					float: left;
					height: 300px;
					width: 50%;
					.item-img{
						width: 160px;
						height: 160px;
						img{
							width: 100%;
							height: 100%
						}
					}
				}
			}
			
		}


		.reback{
			a{
				font-size: 14px;
			}
		}

	}





</style>