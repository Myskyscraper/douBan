<template>
  <div id="app">
    
    <header class="header">

    <nav>

      <li class="logo"><router-link to="/user/01">豆瓣</router-link></li>
      <li><router-link to="/user/01">图书</router-link></li>
      <li><router-link to="/user/02">电影</router-link></li>
      <li><router-link to="/user/01">广播</router-link></li>
      <li><router-link to="/user/01">图书</router-link></li>

    </nav>

    
    </header>


    <router-view/>
  </div>
</template>


<script>
export default {
  name: 'app'
}
</script>


<style scoped lang="less">
/*样式开始*/
#app{width: 100%;height: 100%;}
*{margin: 0;padding: 0;}
li{list-style: none;}
a{text-decoration: none;}



/*样式结束*/
  @font_color:#111;

  @font1:#00b600;
  @font2:#2384E8;
  @font3:#9F7860;
  @font4:#E4A813;
  @font5:#2AB8CC;




  .header nav{
      font-size: 20px;
      display: flex;
      padding-bottom: 9px;
      border-bottom: 1px solid @font_color;
      li{
        &:nth-child(1){
          a{color:#00b600;font-size: 24px;}
        }
        &:nth-child(2){
          a{color: #2384E8;}
        }
        &:nth-child(3){
          a{color: #9F7860;}
        }
        &:nth-child(4){
          a{color: #E4A813;}
        }
        &:nth-child(5){
          a{color: #2AB8CC;}
        }
        flex:1;
        a{
          font-size: 16px;
          color: @font_color;
        }
      }



      .logo{
        flex: 2;
        color: #00b600!important;
      }

  }







</style>
