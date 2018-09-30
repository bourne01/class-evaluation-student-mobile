<template>
    <div id="tabbody">
        <p id="pm">4</p>
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
    #tabbody{
        border-bottom:px2rem(1px) solid #f3f3f6;
        height: px2rem(140px);}
    #pm{
        float: left;
        font-family: 'PingFang-SC-Medium';
        font-size: px2rem(36px);
        color: #171a20;width: px2rem(129px);
        line-height: px2rem(140px);
        text-align: center;
        }
     #tx{
        width: px2rem(80px);
        height: px2rem(80px);
        border-radius: 50%;
        margin-top: px2rem(16px);
        margin-right: px2rem(10px);
        float: left;
        border: px2rem(3px) solid white;}
    .title{
        float: left;
        margin-top: px2rem(15px);
        height: px2rem(53px);}
    .title a{
        font-family: 'PingFang-SC-Medium';
        font-size: px2rem(24px);
        color: #171a20;
        line-height: px2rem(24px);
        text-decoration: none;}
    .title p{
        font-family: 'PingFang-SC-Medium';
        font-size: px2rem(24px);
        color: #939aad;
        line-height: px2rem(24px);}
    .jf{
        float: right;
        font-family: 'PingFang-SC-Medium';
        font-size: px2rem(24px);
        color: #171a20;
        margin-right: px2rem(39px);
        margin-top: px2rem(44px);
        height: px2rem(22px);}
</style>