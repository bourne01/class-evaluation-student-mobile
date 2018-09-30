<template>
    <div class="opencourse">
        <swipeout>
            <swipeout-item 
                @on-close="handleEvents('on-close')" 
                @on-open="handleEvents('on-open')" 
                transition-mode="follow"
                v-for="idx in 5" :key="idx">
                <div slot="right-menu">                
                <swipeout-button @click.native="onButtonClick('delete')" type="warn" :background-color="'#ff0'">
                    <!-- <img :src="require('../../assets/svg/favorite-active.svg')" alt=""> -->
                    <div class="cancel">
                        <img :src="require('../../assets/svg/star-white.svg')" alt="" class="start-white">
                        <p>取消收藏</p></div>
                </swipeout-button>
                </div>
                <div slot="content" class="course vux-1px-t">
                    <img :src="require('../../assets/me/course-picture.png')" alt="" class="picture">  
                    <ul class="course-content">
                        <h4>计算机科学与技术</h4>
                        <li class="grade">高一 上学期</li>
                        <li  class="icon-area">
                            <span><img :src="require('../../assets/home/teacher.png')" alt="" class="teacher-icon"></span>
                            教师
                            <span class="name">王老师</span>
                            </li>
                        <li>
                            <span><img :src="require('../../assets/home/course.png')" alt="" class="course-icon"></span>
                            知识点 
                            <span class="chapter">第二章·第2课 微机接口技术</span>
                            </li>
                    </ul>
                </div>
            </swipeout-item>
        </swipeout>
    </div>
</template>

<script>
import { Swipeout, SwipeoutItem, SwipeoutButton, XButton } from 'vux'

export default {
  components: {    
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    XButton
  },
}
</script>

<style lang="scss">
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .opencourse .vux-swipeout-item{
        height:px2rem(248px);
    }
    .opencourse .vux-swipeout-content{
        height:px2rem(248px);
    }
    .opencourse .vux-swipeout-button{
        width:px2rem(140px)!important;
    }
</style>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .course{
        height: px2rem(248px);
        margin-top: px2rem(20px);
        font-size: px2rem(24px);
    }
    .course-content{
        padding-top: px2rem(39px);
    }
    .picture{
        width: px2rem(188px);
        height: px2rem(188px);
        margin: px2rem(30px);
        float: left;
    }
    li{
        list-style: none;
        color: #ACADB0;
        line-height: px2rem(44px);
    }
    h4{
        font-size: px2rem(28px);
    }
    .grade{
        color: #616475;
    }
    .course-icon,.teacher-icon{
        width: px2rem(32px);
        height: px2rem(32px);
        display: block;
        margin-top: px2rem(4px);
        float: left;
        margin-right: px2rem(6px);
    }
    .icon-area{
        margin-top: px2rem(10px);
        margin-bottom: px2rem(4px);
    }
    .name,.chapter{
        color: #585A60;
        margin-left: px2rem(12px);
    }
    .start-white{
        width: px2rem(24px);
        height: px2rem(24px);
        margin-top: px2rem(85px);
    }
    .cancel{
        width: px2rem(140px);
        height: px2rem(248px);
        text-align: center;
        background: #FC6835;
    } 
</style>
