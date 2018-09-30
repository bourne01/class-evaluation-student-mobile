<template>
    <div class="me-header">
        <div class="top">
            <h3 class="name">张同学</h3>
            <img class="sex" src="../../assets/me/female.png"/>
            <p class="message">ID20150803 &nbsp 2018期·高一</p>
            <img class="head-portrait" src="../../assets/me/head-portrait.png"/>
        </div>
        <div class="level">
            <p>Lv2</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }  
    .me-header{
        width: px2rem(750px);
        height: px2rem(224px);
        background: white;
    }
    .name{
        color: #171A20;
        font-size: px2rem(40px);
        font-family: 'PingFang-SC-Bold';
        margin-top: px2rem(62px);
        margin-left: px2rem(40px);
        line-height: px2rem(40px);
        margin-right: px2rem(10px);
        float: left;
    }
    .top{
        height: px2rem(154px);
    }
    .sex{
        width: px2rem(24px);
        height: px2rem(24px);
        float: left;
        margin-top: px2rem(62px);
    }
    .message{
        color: #ACADB0;
        font-size: px2rem(24px);
        font-family: 'PingFang-SC-Medium';
        position: absolute;
        margin-left: px2rem(40px);
        margin-top: px2rem(114px);
    }
    .head-portrait{
        float: right;
        width: px2rem(108px);
        height: px2rem(108px);
        border-radius: 50%;
        margin-top: px2rem(48px);
        margin-right: px2rem(60px);

    }
    .level{
        float: left;
        width: px2rem(48px);
        height: px2rem(26px);
        margin-left: px2rem(40px);
        border-radius: px2rem(4px);
        background: #FF9000;
    }
    .level p{
        font-weight: none;
        font-family: 'PingFang-SC-Medium';
        font-size: px2rem(22px);
        text-align: center;
        color: white;
        line-height: px2rem(26px);
    }
</style>
