<template>
    <div id="tabtody">
        <img :src="require('../../assets/credit-rank/top1.png')" alt="" id="pm">  
        <img :src="require('../../assets/credit-rank/hd.png')" alt=""  id="tx">
        <div class="title"><a href="#">林小米</a><p>ID1234536</p></div>
        <div class="jf">32466</div>
    </div>
</template>
<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    #tabtody{
        border-bottom:px2rem(1px) solid #f3f3f6;
        height: px2rem(140px);}
    #pm{
        width: px2rem(124px);
        height: px2rem(124px);
        float: left;
        margin-top: px2rem(6px);
        margin-left: px2rem(7px);
        margin-right: px2rem(12px);}
    #tx{
        width: px2rem(80px);
        height: px2rem(80px);
        border-radius: 50%;
        margin-top: px2rem(30px);
        margin-right: px2rem(10px);
        float: left;}
    .title{
        float: left;
        margin-top: px2rem(15px);
        height: px2rem(53px);}
    .title a{
        font-family: 'PingFang-SC-Medium';
        font-size: px2rem(24px);
        color: #171a20;
        line-height: px2rem(24px);}
    .title p{
        font-family: 'PingFang-SC-Medium';
        font-size: px2rem(24px);
        color: #939aad;
        line-height: px2rem(24px);}
    .jf{
        float: right;
        font-family: 'PingFang-SC-Medium';
        font-size: px2rem(24px);
        color: #7573ed;
        margin-right: px2rem(39px);
        margin-top: px2rem(44px);
        height: px2rem(22px);}
</style>