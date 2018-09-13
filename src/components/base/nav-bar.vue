<template>
    <div class="nav-bar">
         <ul class="box">
              <a href="###"> <li class="flex1">
                   
                        <img src="../../assets/home/home.png" alt="">
                        <p>首页</p>
                   
              </li> </a>
              <a href="###"> <li class="flex2">
                   
                        <img src="../../assets/home/error-collection.png" alt="">
                        <p>错题集</p>
                   
              </li> </a>
              <a href="###"><li class="flex3">
                    
                        <img src="../../assets/home/rank.png" alt="">
                        <p>积分排行</p>
                   
              </li> </a>
              <a href="###">
                  <li class="flex4">
                        <img src="../../assets/home/mine.png" alt="">
                        <p>我的</p>
              </li>
              </a>
         </ul>
    </div>
</template>
<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .nav-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        border-top: 1px solid #fefeff;
        background-color:#fffcf2;
        z-index: 10;
    }
    li{
          list-style: none;
          float: left;
          text-align: center;
          margin: 0 px2rem(14px);
          width: px2rem(160px);
          height: px2rem(90px);
          margin-top: px2rem(20px);
    }
    a{
      color: #9b9ea3;
      font-size: px2rem(24px);
    }
    img{
        width: px2rem(40px);
        height: px2rem(40px);
    }
    .box{
        display: flex;
        align-items: center;
    }
</style>