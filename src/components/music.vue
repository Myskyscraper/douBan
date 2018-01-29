




<template>

	<div class="music_con">
		<div class="music_title">影院热映</div>

		<div class="wrapper" ref="wrapper">
			<ul class="content">

				<li>...</li>
				<li>...</li>
				<li>...</li>
				<li>...</li>
				<li>...</li>
				<li>...</li>
				<li>...</li>
				<li>...</li>
				<li>...</li>

				<li>...</li>
				<li>...</li>
				<li>...</li>
				<li>...</li>
				<li>...</li>
				<li>...</li>
				
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
				title:"book"
			}
		},
		created(){
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
					alert('ok+2')
					this.scroll.finishPullDown()
				}),

				this.scroll.on('pullingUp', () => {
					alert('ok+1')
					this.scroll.finishPullUp()
				})
				
				this.scroll.refresh()
  			

			}
  		}

	}






</script>


<style scoped lang="less">
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
					height: 40px;
					font-size: 0.24rem;
					color: red;
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