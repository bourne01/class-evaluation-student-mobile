<template>
    <div class="home-course-tab">
        <!-- 课前、课后与学生讨论选项卡区已经有现成的不用再编写 -->
        <tab 
            :line-width="3" custom-bar-width="3em"
            default-color="#616475"
            active-color="#4B78FF"
            >
            <tab-item  @on-item-click="onTabClick">公开课</tab-item>
            <tab-item selected @on-item-click="onTabClick">我的课</tab-item>
        </tab>
    </div>

</template>

<script>
import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
export default {
    components: {
        Tab,
        TabItem,
        Sticky,
        Divider,
        XButton,
        Swiper,
        SwiperItem,        
    },
    data(){
        return{
            actIndex:1,//默认激活选项卡内容
        }
    },
    methods:{
        /**@function 监听点击选项卡事件 */
        onTabClick(idx){
            console.log(idx);
            let isOpenCourse = false;
            this.actIndex = idx;
            if(idx === 0){
                isOpenCourse = true;
            }
            this.$root.bus.$emit('open-course',isOpenCourse)
        }
    }
}
</script>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .vux-tab{
        height:px2rem(88px);
        
    }
    .home-course-tab{
        width:px2rem(300px);
    }
    .vux-tab-item{
        font-size:px2rem(32px)!important;
        font-weight: bold;
        background:none!important;
        line-height:px2rem(88px)!important;
    }
</style>

<style lang="scss" >
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .vux-tab-ink-bar{
        height:px2rem(6px)!important;
    }
</style>

