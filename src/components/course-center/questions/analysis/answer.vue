<template>
    <div>
        <!-- 正确答案与纠错功能区 -->
        <div class="answer">
            <span>答案：数据处理</span>
            <span class="icon-error"></span>
            <span class="error">纠错</span>
        </div>
    </div>
    
</template>
<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
   .answer{
       height: px2rem(88px);
       width: px2rem(670px);
       line-height: px2rem(88px);
       font-size: px2rem(28px);
       color: #171a20;
       margin: 0 auto;
   }
   .error{
       color: #acadb0;
       font-size: px2rem(24px);
       float: right;
   }
    .icon-error{
        display: block;
        width: px2rem(35px);
        height: px2rem(35px);
        background: url(../../../../assets/svg/correction.svg);
        float: right;
        margin-top: px2rem(28px);
    }
</style>