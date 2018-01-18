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
body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td {
  margin: 0;
  padding: 0;
}

ul,li{
  list-style: none;
}

a{
  text-decoration: none;
}

/*样式结束*/
  @font_color:#111;

.header nav{
  font-size: 20px;
  display: flex;
  padding-bottom: 9px;
  border-bottom: 1px solid @font_color;
  li{
    flex:1;
  }
 .logo{
    flex: 2;
    color: #00b600!important;
  }

}







</style>
