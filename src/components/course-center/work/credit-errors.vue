<template>
    <div>
        <div class="right-box">
             <div class="right">
              <span class="right-num">答对20题</span>
              <span class="integral">+20积分</span>
          </div>
        </div>
        <div class="wrong-box">
          <div class="wrong">
              <span class="wrong-num">答错2题</span>
              <span class="more-box"><img :src="require('../../../assets/home/more_icon.png')" alt="" class="more"></span>
                <span class="review">复习错题</span>
          </div>
        </div>
        
    </div>

</template>
<style lang="scss" scoped>
     @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .right-box,.wrong-box{
         width: px2rem(750px);
    }
    .right-box{
        border-bottom: 1px solid #f3f3f6;
    }
    .right,.wrong{
        width: px2rem(670px);
        height: px2rem(108px);
        line-height: px2rem(108px);
        margin: 0 auto;
    }
    .integral{
        float: right;
        color: #ff9000;
        font-size: px2rem(24px);
    }
    .right-num,.wrong-num{
        font-size: px2rem(28px);
    }
    .right-num{
        color: #22cb64;
    }
    .wrong-num{
        color: #fa5b4a;
        float: left;
    }
    .review{
        display: block;
        width: px2rem(134px);
        height: px2rem(44px);
        background-color: #fa5b4a;
        font-size: px2rem(22px);
        float: right;
        border-radius: px2rem(30px);
        line-height: px2rem(44px);
        text-align: center;
        color: white;
        margin-top: px2rem(32px);
    }
    .more,.more-box{
        width: px2rem(30px);
        height: px2rem(30px);
    }
    .more-box{
        float: right;
        transform:rotate(-90deg);
        -ms-transform:rotate(-90deg); 	
        -moz-transform:rotate(-90deg); 	
        -webkit-transform:rotate(-90deg); 
        -o-transform:rotate(-90deg); 
        margin-top: px2rem(40px);
        margin-right: px2rem(30px);
    }
</style>