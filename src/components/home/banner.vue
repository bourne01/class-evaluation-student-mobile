<template>
    <div class="banner">
        <div class="left"></div>
        <div class="middle-box">
            <img :src="require('../../assets/home/banner.png')" alt="" class="middle">  
        </div>   
        <div class="right"><img src="../../assets/home/banner-right.jpg" alt="" class="right"></div>
    </div>
</template>
<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .banner{
        position: relative;
    }
    .middle,.middle-box{
        width: px2rem(670px);
        height: px2rem(272px);
         margin: 0 auto;
    }
    .right{
        width: px2rem(29px);
        height: px2rem(252px);
        position: absolute;
        top: px2rem(4px);
        right: 0px;
        border-top-left-radius: px2rem(10px);
        border-bottom-left-radius: px2rem(10px);
    }
    .left{
        background-color: #5c9dff;
        width: px2rem(29px);
        height: px2rem(252px);
        position: absolute;
        top: px2rem(9px);
        left: 0;
        border-top-right-radius: px2rem(10px);
        border-bottom-right-radius: px2rem(10px);

    }
</style>