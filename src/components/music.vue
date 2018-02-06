<template>

	<div class="music_con">
		<div class="music_title">影院热映</div>

		
		<div class="wrapper" ref="wrapper">

			<ul class="content">

				<li v-for="item in allGoods" v-on:click="goDetail(item)">

					<div class="item-img">
						<img v-bind:src="item.goodsListImg" alt="">
					</div>

					<div class="item-name">
						{{item.goodsName|ingFor}}
					</div>

		
					<div class="item-class">
						分类：{{item.className}}
					</div>

					<div class="item-discount">
						限时{{item.discount}}折
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

	import BScroll from 'better-scroll';

	import router from '../router'

	export default {
		name:"Music",
		data(){
			return {
				title:"book",
				allGoods:''
			}
		},
		filters:{
			ingFor:function(value){
				var newMessage = value.slice(0,10)+"......";
				return newMessage;
			}

		},
		created(){

			

			this.$nextTick(() => {

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
					},
					 click: true//这里配置点击
				}),
			
				this.scroll.on('pullingDown', (pos) => {
					console.log('ok+2')
					this.scroll.finishPullDown()
				}),

				this.scroll.on('show', (pos) => {
					console.log('ok+2')
				},false),


				this.scroll.on('pullingUp', () => {
					console.log('ok+1')
					this.scroll.finishPullUp()
				})
				
				this.scroll.refresh()
			},
			goDetail(item){
				var txt = JSON.stringify(item)
				console.log(txt);
				//router.push({path:"/user/03", query:{id:3}})

				router.push({path:"/user/03", query:{shopdeta:item}})
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
				height: 1400px;
				li{
					font-size: 0.24rem;
					color: red;
					float: left;
					height: 280px;
					width: 50%;
					.item-img{
						width: 160px;
						height: 160px;
						img{
							width: 100%;
							height: 100%
						}
					}
					.item-name{
						margin:10px 0 10px;
						font-size: 14px;
						color: #232326;
					}
					.item-prize{
						color: #f15353;
    					font-size: 16px;
					}
					.item-class{
						color: #232326; 
					}
					.item-discount{
						width: 70%;
						border: 1px solid #dbdbdb;
						color: #232326;
						text-align: center;
						line-height: 18px;
						margin: 8px 0;
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