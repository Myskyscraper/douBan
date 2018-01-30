




<template>

	<div class="music_con">
		<div class="music_title">影院热映</div>

		<div class="wrapper" ref="wrapper">

			<ul class="content">

				<li v-for="">
					<div class="item-img">
						
					</div>

					<div class="item-name">
						
					</div>

					<div class="item-discount">
						6.5
					</div>

					<div class="item-class">
						衬衣
					</div>

					<div class="item-prize">
						￥68
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
					const txt = (response.data);
					this.allGoods = txt.slice(8);
					console.log(txt.slice(8))
					console.log(this.allGoods);	

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
				li{
					
					font-size: 0.24rem;
					color: red;
					text-align: center;	
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