<template>

	<div class="book_con">
		<div class="book_title">最受关注图书|虚构类</div>
		
		<div class="book-wrap">


		<ul class="rows-books">


			<li v-on:click="showAlldata">
				<div class="item-book">
					<div class="item-img">
						<img src="" alt="">
					</div>
					<span class="item-title">白天的房子，夜晚的房子</span>

					<div class="item-rating">
						<div class="rank">
							<span class="rating-stars" data-rating="4.7"><span class="rating-star rating-star-small-full"></span><span class="rating-star rating-star-small-full"></span><span class="rating-star rating-star-small-full"></span><span class="rating-star rating-star-small-full"></span><span class="rating-star rating-star-small-full"></span></span> <span>9.3</span>
						</div>
					</div>
				</div>
			</li>


			

		</ul>

		</div>
		





	</div>



</template>


<script type="text/javascript">
	

	export default {
		name:"Book",
		data(){
			return {
				title:"book",
				msg:'hah'
			}
		},
		created(){
			
		},
		methods:{
			
			showAlldata(){
				this.$axios({
					method:'get',
					url:'/api/book/1220562'
				}).then(response =>{
					console.log(response.data)
				})
				
				}
				
			}

	}

</script>


<style scoped lang="less">
ul,li{
  list-style: none;
}
  @font_color:#111;

  .book_con{
  	.book_title{
  		font-size: 16px;
  		line-height: 24px;
  		margin-top: 10px;
  	}

  	.book-wrap{
  		width: 400px;
  		height: 250px;
  		overflow-x:scroll; 
  		.rows-books{
  			width: 400px;
  			height: 250px;
  			
  			font-size: 14px;
  			li{
  				float: left;
  				width: 120px;
  				.item-img{
  					margin: 0 auto;
  					width: 100px;
  					height: 145px;
  				}
  			}
  		}
  	}
  	


  }

  
</style>