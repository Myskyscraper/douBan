<template>

	<div class="book_con">

		<div class="book_title">最受关注图书|虚构类</div>


		
		<ul class="rows-books">


			

			<li v-on:click="showAlldata" v-show="isShow">

				<div class="item-book">

					<div class="item-img">
						<img v-bind:src='bookInfo.image' alt="">
					</div>

					<div class="item-info">

						<div class="item-title">{{bookInfo.title}}</div>

						<p class="item-author">
						
							<span v-for="itemAut in bookAuthor">{{itemAut}}</span>

						</p>
						<!-- bookInfo.price为78.90元，我想把“元”去掉 -->
						<p class="item-prize">{{bookPrize|formPrize}}</p>

						<div class="item-rating">
							<div class="item-numRaters">{{bookRating.numRaters|formComment}}</div>
							<div class="rank">
								<span class="rating-stars" data-rating="4.7"><span class="rating-star rating-star-small-full"></span><span class="rating-star rating-star-small-full"></span><span class="rating-star rating-star-small-full"></span><span class="rating-star rating-star-small-full"></span><span class="rating-star rating-star-small-full"></span></span> <span>9.3</span>
							</div>
						</div>

					</div>
					
				</div>
			</li>


			<!-- 循环开始 -->
				<li v-for="item in allShop"  v-on:click="showAlldata">

				<div class="item-book">

					<div class="item-img">
						<img v-bind:src='item.image' alt="">
					</div>

					<div class="item-info">

						

						<div class="item-title">{{item.title}}</div>

						<p class="item-author">
						
							<span v-for="itemAut in item.author">{{itemAut}}</span>

						</p>
						<!-- bookInfo.price为78.90元，我想把“元”去掉 -->
						<p class="item-prize">{{item.price|formatTxt}}</p>
						
						<div class="item-rating">
							<div class="item-numRaters">{{item.rating.max|formComment}}</div>
							<div class="rank">
								<span class="rating-stars" data-rating="4.7"><span class="rating-star rating-star-small-full"></span><span class="rating-star rating-star-small-full"></span><span class="rating-star rating-star-small-full"></span><span class="rating-star rating-star-small-full"></span><span class="rating-star rating-star-small-full"></span></span> <span>9.3</span>
							</div>
						</div>

					</div>
					
				</div>
			 </li>



			<!-- 循环结束 -->




		</ul>

	</div>



</template>


<script type="text/javascript">
	

	export default {
		name:"Book",
		data(){
			return {
				isShow:false,
				title:"book",
				msg:'hah',
				bookInfo:'',
				bookRating:'',
				bookAuthor:'',
				bookPrize:'',
				allShop:[]
			}
		},
		filters:{
			 formatTxt:function(value){
				return "￥"+value;
			 },
			 more:function(value){
				var newMessage = value.slice(0,12)+"........点击查看更多";
				return newMessage;
			 },
			 formPrize:function(value){
			 	return  value ? "￥" + (value.slice(0, value.length - 1))  :  "" ;
			 },
			 formComment:function(value){
				var values =  value+"条好评";
			 	return values;
			 }
		},
		created(){

			for(let i=0;i<4;i++){
				this.$axios({
				method:'get',
				url:'/api/book/100307'+i//例如：api/book/1003071为一个书本内容
			}).then(response =>{
				this.bookInfo = response.data;
				this.allShop[i]=response.data;
				this.bookRating = this.bookInfo.rating;
				this.bookAuthor = this.bookInfo.author;
				this.bookPrize = this.bookInfo.price;
			})
			}
		},
		methods:{
			showAlldata(){
					console.log(this.bookInfo);
					console.log(this.allShop);
				}
			}

	}

</script>


<style scoped lang="less">
*{margin: 0;padding: 0;}
li{list-style: none;}

@font_color:#111;

@subtxt:#848689;


.book_con{
	.book_title{
		font-size: 16px;
		line-height: 24px;
		margin: 10px 0;
	}

	.rows-books{	
		font-size: 14px;
		li{	
			margin-bottom: 11px;
			border-bottom: 1px solid #cccccc;
			padding-bottom: 5px;
			.item-book{
				display: flex;
				.item-img{
					flex: 1;
					padding: 5px 10px;	
				}
				.item-info{
					flex: 2;
					.item-title{
						font-size: 16px;
						margin-bottom: 4px;
					}
					.item-author{
						font-size: 14px;
						color: @subtxt;
						margin-bottom: 45px;
					}
					.item-prize{
						color: #f23030;
					}
					.item-numRaters{
						font-size: 13px;
						color: #848689;
					}
				}

			}
			
		}
	}
}

  
</style>