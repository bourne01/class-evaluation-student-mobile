<template>
    <article>
        <div class="comment">
                <div class="top">
                    <a href="#">
                        <img src="../../../assets/course/hp.png" alt="" class="head-portrait"/>
                    </a>
                    <div class="title">
                        <p><a href="javascript:;">王同学</a></p>
                        <p class="time">刚刚</p>
                    </div>
                    <img src="../../../assets/course/female.png" alt="" class="sex"/>
                    <div class="zan">
                        <img src="../../../assets/svg/like.svg" id="xin" class="xin" alt=""/>
                        <p id="p1">84</p>
                    </div>
                </div>
                <div class="commentary">
                    <div class="major-comment">
                        <p>作品收到了，质量特别好，物器精致，
                            包装更是常满意的一次聚餐，
                            推荐大家品尝!</p>
                    </div>
                    <div class="other-comment">
                        <a href="javascript:;"><p>林同学</p></a><p>：欢迎品尝！</p>
                        <a href="javascript:;" class="a">共21条回复></a>
                    </div>
                </div>
            </div>
    </article>
</template>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .comment{
        width: px2rem(670px);
        padding: px2rem(39px) px2rem(40px) px2rem(30px) px2rem(40px);
        background: white;
        border-bottom: 1px solid #f3f3f6;
        font-size:px2rem(24px);
    }
    .title{
        float: left;
        height: px2rem(57px);
        width: px2rem(77px);
    }
    .title a{
        font-size: px2rem(24px);
        color: #000;
        line-height: px2rem(24px);

    }
    .title p{
        font-size: px2rem(24px);
        color: #979797;
        line-height: px2rem(24px);
    }
    .top{
        height: px2rem(57px); 
    }
    .time{
        margin-top: px2rem(10px);
    }
    .head-portrait{
        width: px2rem(56px);
        float: left;
        border-radius: 50%;
        margin-right: px2rem(20px);
    }
    .sex{
        width: px2rem(24px);
        height: px2rem(24px);
        float: left;
    }
    .zan{
        float: right;
    }
    .xin{
        width: px2rem(22px);
    }
    .zan p{
        font-size: px2rem(24px);
        line-height: px2rem(24px);
        color: #bfc5d2;
    }
    .commentary{
        margin-left: px2rem(76px);
    }
    .major-comment{
        font-size: px2rem(26px);
    }
    .other-comment{
        padding: px2rem(30px) px2rem(20px);
        width: px2rem(556px);
        font-size: px2rem(24px);
        background: #f3f3f6;
        margin-top: px2rem(32px);
    }
    .other-comment p{
        display: inline;
    }
    .a{
        display: block;
        margin-left: px2rem(410px);
    }
</style>