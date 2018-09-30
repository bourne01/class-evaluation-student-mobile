<template>
    <div class="box">
        <p class="news">已完成课前作业，本次测试100分！</p>
        <p class="content">《计算机与信息技术》第一章·第2课：计算机的基本认识课前作业，已完成！</p>
        <p class="reward">+10积分奖励</p>
        <p class="time">2018/10/20 08:30</p>
        <div class="button">立即查看</div>
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
        height: px2rem(260px);
        margin: px2rem(20px) px2rem(20px) px2rem(20px) px2rem(20px);
        background: white;
        border-radius: px2rem(8px);
    }
    .news{
        color: #171A20;
        font-weight: bold;
        font-family: 'PingFang-SC-Bold','Microsoft Yahei';
        font-size: px2rem(28px);
        padding-top: px2rem(40px);
        margin-left: px2rem(38px);
        margin-bottom: px2rem(8px);
    }
    .content{
        color: #171A20;
        font-size: px2rem(24px);
        font-family: 'PingFangSCRegular','Microsoft Yahei';
        margin-bottom: px2rem(6px);
        letter-spacing:px2rem(-1px);
        margin-left: px2rem(40px);
    }
    .reward{
        color: #ffa83c;
        margin-left: px2rem(40px);
        font-size: px2rem(24px);
        margin-bottom: px2rem(6px);
    }
    .time{
        font-family: 'PingFangSCRegular','Microsoft Yahei';
        margin-top: px2rem(10px);
        margin-left: px2rem(40px);
        font-size: px2rem(24px);
        color: #585A60;
    }
    .button{
        width: px2rem(160px);
        height: px2rem(44px);
        background: #E0ECFF;
        text-align: center;
        line-height: px2rem(44px);
        color: #4B78FF;
        border-radius: px2rem(22px);
        font-size: px2rem(24px);
        position: absolute;
        bottom: px2rem(30px);
        right: px2rem(30px);
    }
</style>