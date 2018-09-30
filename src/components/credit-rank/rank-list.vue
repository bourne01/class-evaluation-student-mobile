<template>
    <div class="rank-list">
        <div id="rank-item"  v-for="idx in 100" :key="idx">
            <img :src="require('../../assets/credit-rank/top1.png')" alt="" class="top3" v-if="idx === 1">
            <img :src="require('../../assets/credit-rank/top2.png')" alt="" class="top3" v-if="idx === 2">      
            <img :src="require('../../assets/credit-rank/top3.png')" alt="" class="top3" v-if="idx === 3"> 
            <span v-if="idx>3" class="rank-index">{{idx}}</span>                   
            <img :src="require('../../assets/credit-rank/hd.png')" alt=""  class="avatar">
            <div class="title"><a href="#">林小米</a><p>ID1234536</p></div>
            <div class="credit">32466</div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }

    #rank-item{
        border-bottom:px2rem(1px) solid #f3f3f6;
        height: px2rem(140px);}
    .top3{
        width: px2rem(124px);
        height: px2rem(124px);
        float: left;
        margin-top: px2rem(6px);
        margin-left: px2rem(7px);
        margin-right: px2rem(12px);}
    .rank-index{
        width: px2rem(124px);
        height: px2rem(124px);
        float: left;
        text-align: center;
        line-height:px2rem(124px);
    }
    .avatar{
        width: px2rem(80px);
        height: px2rem(80px);
        border-radius: 50%;
        margin-top: px2rem(30px);
        margin-right: px2rem(10px);
        float: left;}
    .title{
        float: left;
        margin-top: px2rem(26px);
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
    .credit{
        float: right;
        font-family: 'PingFang-SC-Medium';
        font-size: px2rem(24px);
        color: #2185FF;
        margin-right: px2rem(39px);
        margin-top: px2rem(44px);
        height: px2rem(22px);}
</style>