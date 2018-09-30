<template>
    <div class="box">
        <p class="news">您的课前作业未完成！</p>
        <p class="content">《计算机与信息技术》还有20分钟就开始了，请完成课前作业！</p>
        <p class="time">2018/10/20 08:30</p>
        <div class="button">立即完成</div>
    </div>
</template>


<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    } 
    .box{
        position: relative;
        width: px2rem(710px);
        height: px2rem(230px);
        margin: px2rem(20px) px2rem(20px) px2rem(20px) px2rem(20px);
        background: white;
        border-radius: px2rem(8px);
    }
    .news{
        color: #FA5B4A;
        font-family: 'PingFang-SC-Bold','Microsoft Yahei';
        font-size: px2rem(28px);
        padding-top: px2rem(40px);
        margin-left: px2rem(38px);
        font-weight: bold;
        margin-bottom: px2rem(22px);
    }
    .content{
        color: #171A20;
        font-size: px2rem(24px);
        font-family: 'PingFangSCRegular','Microsoft Yahei';
        margin-bottom: px2rem(32px);
        letter-spacing:px2rem(-1px);
        margin-left: px2rem(42px);
    }
    .time{
        font-family: 'PingFangSCRegular','Microsoft Yahei';
        margin-left: px2rem(40px);
        font-size: px2rem(24px);
        color: #585A60;
    }
    .button{
        width: px2rem(160px);
        height: px2rem(44px);
        background: #FEE1D7;
        text-align: center;
        line-height: px2rem(44px);
        color: #FA5B4A;
        border-radius: px2rem(22px);
        font-size: px2rem(24px);
        position: absolute;
        bottom: px2rem(30px);
        right: px2rem(30px);
    }
</style>