<template>
    <div class="content-box">
        <ul class="chapter-directory">
            <li class="computer">
                <span>计算机课程·第一章</span>
                <div class="right" @click="onClick">
                    <span>简介</span>
                    <span class="pic"><img :src="require('../../assets/home/more_icon.png')" alt="" id="more"></span>
                </div>
            </li>
            <li>第2课 Sublime Text代码</li>
        </ul>
        <ul class="review-area">
            <li><i class="eye"></i><span>2466</span></li>
            <li  class="mes-box"><i class="message"></i><span>136</span></li>
            <li><i class="like"></i><span>210</span></li>
        </ul>
        <introduction-popup></introduction-popup>
    </div>
</template>

<script>
import IntroductionPopup from './intro-popup'
export default {
    components:{
        IntroductionPopup,
    },
    data(){
        return{

        }
    },
    methods:{
        /**@function 监听点击查看课程简介图标，然后发送点击事件 */
        onClick(){
            console.log('...jfaljfaljfalj');
            this.$root.bus.$emit('course-introduction');
        },
    },
}
</script>


<style lang="scss" scoped>
     @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .content-box{
        width: px2rem(750px);
        height: px2rem(128px);
        position: relative;
    }
    .computer{
        font-size: px2rem(24px);
        color: rgb(147, 154, 173);
    }
    .chapter-directory{
        width: px2rem(670px);
        height: px2rem(74px);
        font-size: px2rem(28px);
        margin: 0 auto;
        padding-top: px2rem(30px);
    }
    li{
       list-style: none;

    }
    .right{
        float: right;
        line-height: px2rem(45px);
    }
    img{
        display: block;
        width: px2rem(30px);
        height: px2rem(30px);
        transform:rotate(-90deg);
        -ms-transform:rotate(-90deg); 	
        -moz-transform:rotate(-90deg); 	
        -webkit-transform:rotate(-90deg); 
        -o-transform:rotate(-90deg); 
        position: absolute;
        right: px2rem(32px);
        margin-top: px2rem(8px);
    }
    span{
        color: #939aad;
        margin-right: px2rem(12px);
    }
    .pic{
        float: left;
    }
    .review-area{
        margin-top: px2rem(28px);
        width: px2rem(670px);
        margin: 0 auto;
        padding-top: px2rem(28px);
    }
    .review-area li{
          float: left;
          font-size: px2rem(24px);
    }
    i{
        display: block;
        width: px2rem(30px);
        height: px2rem(30px);
        float: left;
        margin-top: px2rem(4px);
        margin-right: px2rem(8px);
    }
    .like{
        background: url(../../assets/svg/like.svg);
    }
    .eye{
        background: url(../../assets/svg/like.svg);
    }
    .message{
         background: url(../../assets/svg/like.svg);
    }
    .review-area li:last-child{
        float: right;
        margin-right: px2rem(58px);
    }
     .review-area .mes-box{
        float: right;
    }
</style>

