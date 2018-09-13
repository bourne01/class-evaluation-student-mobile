<template>
    <div class="compose-comment">
        <img src="../../../assets/course/hp.png" alt="" class="head-portrait"/>
        <input type="text" value="| 说点什么" class="text"/>
        <input type="button" value="发送" class="btn"/> 
    </div>
</template>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .compose-comment{
        position: fixed;
        height: px2rem(57px);
        width: px2rem(670px);
        padding: px2rem(20px) px2rem(40px); 
        border-top: 1px solid #f0f0f0;
        border-bottom: 1px solid white;
        background: white;
        bottom: 0;
    }
    .head-portrait{
        width: px2rem(56px);
        float: left;
        border-radius: 50%;
        margin-right: px2rem(20px);
    }
    .text{
        width: px2rem(390px);
        padding: px2rem(15px) px2rem(45px);
        font-size: px2rem(28px);
        color: #bfc5d2;
        border: 0px;
        border-radius: px2rem(28px);
        background: #f3f3f6;
        margin-right: px2rem(10px);
        float: left;
    }
    .btn{
        width: px2rem(100px);
        height: px2rem(57px);
        border-radius: px2rem(28px);
        background: #7573e6;
        border: 0;
        font-size: px2rem(26px);
        color: white;
        float: left;
    }
</style>