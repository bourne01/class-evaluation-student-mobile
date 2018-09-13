<template>
    <div class="count">
        <div class="top-box">
            <ul class="top">
                <li class="all">共22题</li>
                <li class="right"><span class="answer"></span>答对</li>
                <li><span class="unanswer"></span>答错</li>
                <li><span class="value">难度值</span><i></i><i></i><i></i></li>
            </ul>
        </div>
        <div class="down-box">
            <ul class="down">
                <li  v-for="idx in 22" :key="idx"></li>
            </ul>
        </div>
    </div>
</template>
<script>

</script>

<style lang="scss" scoped>
     @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .top-box{
        height: px2rem(80px);
        border-bottom: 1px solid #f3f3f6;

    }
    .top{
        width: px2rem(670px);
         height: px2rem(80px);
        margin: 0 auto;
    }
    .top li{
        float: left;
        list-style: none;
        font-size: px2rem(22px);
        color: #939aad;
        line-height: px2rem(80px);
    }
    .answer{
        display: block;
        width: px2rem(12px);
        height: px2rem(12px);
        background: #d4f5e0;
        float: left;
        margin-top: px2rem(35px);
        margin-right: px2rem(10px);
    }
    .unanswer{
        display: block;
        width: px2rem(12px);
        height: px2rem(12px);
        background: #f85b48;
        float: left;
        margin-top: px2rem(35px);
        margin-right: px2rem(10px);
    }
    .all{
        font-size: px2rem(28px);
        margin-right: px2rem(40px);
    }
    .right{
        margin-right: px2rem(26px);
    }
    .value{
        color: #feba50;
        float: left;
        margin-right: px2rem(20px);
    }
    i{
        background: url(../../../assets/svg/star-yellow.svg);
        display: block;
        width: px2rem(24px);
        height: px2rem(24px);
        float: left;
        margin-top: px2rem(28px);
    }
    .top li:last-child{
       float: right;
    }
    .down li{
        width: px2rem(86px);
        height: px2rem(86px);
        border-radius: px2rem(20px);
        background: #d4f5e0;
        color: rgb(19, 182, 83);
        float: left;
        list-style: none;
        text-align: center;
        margin: 0 px2rem(25px) px2rem(30px) 0;
        line-height: px2rem(86px);
    }
    .down{
        width: px2rem(670px);
        margin: 0 auto;
        margin-top: px2rem(30px);
    }
     .down .none{
        margin-right: 0;
    }
    .down .wrong-question{
        background: #ffe8e0;
        color: #fa5b4a;
    }
</style>