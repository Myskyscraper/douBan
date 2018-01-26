




<template>

	<div class="music_con">
		<div class="music_title">影院热映</div>

		<div class="wrapper" ref="wrapper">
			<ul class="content">
				<li>{{title}}</li>
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
			this.$axios({
				method:'get',
				url:'/api/book/1003074'
			}).then(response =>{
				this.bookInfo = response.data;
				this.$nextTick(() => {
					this.scroll = new BScroll(this.$refs.wrapper, {})
				})
			})
		},
		mounted() {
  		this.$nextTick(() => {
			this.loadMore()
  			
  		})

  		},
  		methods:{

			loadMore(){

				// ---------------
  			
				this.scroll = new BScroll(this.$refs.wrapper, {
					scrollbar :{
						fade: true
					},
					pullUpLoad: {
						   threshold: -20, // 在上拉到超过底部 20px 时，触发 pullingUp 事件
						   stop:0
						}
					});

				this.scroll.on('pullingUp', (pos) => {
					this.loadData();
				});
				this.scroll.finishPullUp()
				this.scroll.refresh()
  			// ---------------

			},

			loadData(){
				alert('ok')

				this.scroll.finishPullUp();
				this.scroll.refresh();

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
		}


		.reback{
			a{
				font-size: 14px;
			}
		}

	}





</style>