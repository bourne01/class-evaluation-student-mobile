<template>
<div>
    <div class="honour">
        <div class="top">
            <p class="my-honour">我的勋章</p>
            <img class="more" src="../../assets/me/more.png"/>
        </div>
        <div class="box">
            <img class="medal" src="../../assets/me/first.png"/>
            <img class="medal" src="../../assets/me/second.png"/>
            <img class="medal" src="../../assets/me/third.png"/>
            <img class="medal" src="../../assets/me/full-marks.png"/>
            <img class="medal" src="../../assets/me/sign-in.png"/>
        </div>
    </div>
    <div class="sign-in">
        <div class="left">
            <p class="sign">签到</p>
            <p class="time">今日已签到，已连续签到3天！</p>
        </div>
        <div class="right">
            <img class="more" src="../../assets/me/more.png"/>
            <p>+10积分</p>
        </div>
    </div>
    <div class="integral">
        <div class="left">
            <p class="integrate">我的积分</p>
        </div>
        <div class="right">
            <img class="more" src="../../assets/me/more.png"/>
            <p>3468</p>
        </div>
    </div>
    <div class="collection-of-questions">
        <p class="questions">收藏的试题</p>
        <div class="right" @click="onClick('question')">
            <img class="more" src="../../assets/me/more.png"/>
            <p>28</p>
        </div>
    </div>
    <div class="open-class-collections">
        <p class="collections">收藏的公开课</p>
        <div class="right" @click="onClick('opencourse')">
            <img class="more" src="../../assets/me/more.png"/>
            <p>12</p>
        </div>
    </div>
    <div class="birthday">
        <p class="my-birthday">我的生日</p>
        <div class="time">
            <p>2010-10-22</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        /**
         * @function 监听点击事件，然后跳转到相应页面
         * @param { 类型 } type
         */
        onClick(type){
            switch(type){
                case 'question':
                    this.$router.push('/favorite-question');
                    break;
                case 'opencourse':
                    this.$router.push('/favorite-opencourse');
                    break;
            }
        },
    },
}
</script>


<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .more{
        width: px2rem(14px);
        height: px2rem(24px);
    }
    .honour{
        margin-top: px2rem(20px);
        width: px2rem(750px);
        height: px2rem(224px);
        background: white;
    }
    .my-honour{
        padding-left: px2rem(40px);
        padding-top: px2rem(36px);
        font-family: 'PingFang-SC-Medium';
        font-size: px2rem(28px);
        color: #171A20;
        padding-bottom: px2rem(24px);
        float: left;
    }
    .honour .more{
        float: right;
        width: px2rem(28px);
        height: px2rem(28px);
        padding-top: px2rem(34px);
        padding-right: px2rem(32px);
    }
    .top{
        height: px2rem(84px);
    }
    .box{        
        height: px2rem(78px);
        float: left;
        width: px2rem(750px);
    }
    .box>img:first-child{
        margin-left: px2rem(38px);
    }
    .medal{
        float: left;
        width: px2rem(78px);
        height: px2rem(78px);
        margin-right: px2rem(26px);
    }
    .sign-in{
        height: px2rem(128px);
        background: white;
        margin-top: px2rem(20px);
    }
    .left .sign{
        font-family: 'PingFang-SC-Medium';
        color: #171A20;
        font-size: px2rem(28px);
        padding-top: px2rem(34px);
        margin-left: px2rem(40px);
        display: block;
        width: px2rem(300px);
    }
    .left .time{
        font-size: px2rem(24px);
        color: #ACADB0;
        font-family: 'PingFang-SC-Medium';
        margin-left: px2rem(40px);
        display: block;
        width: px2rem(340px);
    }
    .sign-in .left{
        float: left;
        width: px2rem(300px);
    }
    .sign-in .right{
        float: right;
        margin-right: px2rem(40px);
        margin-top: px2rem(36px);
    }
    .sign-in .right .more{
        float: right;
        margin-left: px2rem(10px);

    }
    .sign-in .right p{
        float: right;
        color: #4B78FF;
        font-size: px2rem(28px);
        font-family: 'PingFang-SC-Medium';
        line-height: px2rem(28px);
    }
    .integral{
        height: px2rem(98px);
        background: white;
        margin-top: px2rem(2px);
    }
    .integral .left{
        float: left;
        width: px2rem(300px);
    }
    .integral .right{
        float: right;
        margin-right: px2rem(40px);
        margin-top: px2rem(36px);
    }
    .integral .integrate{
        font-family: 'PingFang-SC-Medium';
        color: #171A20;
        font-size: px2rem(28px);
        padding-top: px2rem(34px);
        margin-left: px2rem(40px);
        display: block;
        width: px2rem(300px);
    }
    .integral .right p{
        float: right;
        color: #4B78FF;
        font-size: px2rem(28px);
        font-family: 'PingFang-SC-Medium';
        line-height: px2rem(28px);
    }
    .integral .right .more{
        float: right;
        margin-left: px2rem(10px);
    }
    .collection-of-questions{
        height: px2rem(98px);
        background: white;
        margin-top: px2rem(20px);
    }
    .collection-of-questions .questions{
        font-family: 'PingFang-SC-Medium';
        color: #171A20;
        font-size: px2rem(28px);
        padding-top: px2rem(34px);
        margin-left: px2rem(40px);
        display: block;
        width: px2rem(300px);
        float: left;
    }
    .collection-of-questions .right{
        float: right;
        margin-right: px2rem(40px);
        margin-top: px2rem(36px);
    }
    .collection-of-questions .right .more{
        float: right;
        margin-left: px2rem(10px);
    }
    .collection-of-questions .right p{
        float: right;
        color: #ACADB0;
        font-size: px2rem(28px);
        font-family: 'PingFang-SC-Medium';
        line-height: px2rem(28px);
    }




    .open-class-collections{
        height: px2rem(98px);
        background: white;
        margin-top: px2rem(2px);
    }
    .open-class-collections .collections{
        font-family: 'PingFang-SC-Medium';
        color: #171A20;
        font-size: px2rem(28px);
        padding-top: px2rem(34px);
        margin-left: px2rem(40px);
        display: block;
        width: px2rem(300px);
        float: left;
    }
    .open-class-collections .right{
        float: right;
        margin-right: px2rem(40px);
        margin-top: px2rem(36px);
    }
    .open-class-collections .right .more{
        float: right;
        margin-left: px2rem(10px);
    }
    .open-class-collections .right p{
        float: right;
        color: #ACADB0;
        font-size: px2rem(28px);
        font-family: 'PingFang-SC-Medium';
        line-height: px2rem(28px);
    }

    



    .birthday{
        height: px2rem(98px);
        background: white;
        margin-top: px2rem(20px);
    }
    .birthday .my-birthday{
        font-family: 'PingFang-SC-Medium';
        color: #171A20;
        font-size: px2rem(28px);
        padding-top: px2rem(34px);
        margin-left: px2rem(40px);
        display: block;
        width: px2rem(300px);
        float: left;
    }
    .birthday .time{
        float: right;
        margin-right: px2rem(62px);
        margin-top: px2rem(36px);
    }
    .birthday .time p{
        float: right;
        color: #ACADB0;
        font-size: px2rem(28px);
        font-family: 'PingFang-SC-Medium';
        line-height: px2rem(28px);
    }
</style>
