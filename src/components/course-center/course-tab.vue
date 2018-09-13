<template>
    <div>
        <!-- 课前、课后与学生讨论选项卡区已经有现成的不用再编写 -->
        <tab 
            :line-width="3" custom-bar-width="4em"
            default-color="#acadb0"
            active-color="#fa5b4a"
            >
            <tab-item  @on-item-click="onTabClick">课程目录</tab-item>
            <tab-item selected @on-item-click="onTabClick">课后作业</tab-item>
            <tab-item @on-item-click="onTabClick">学生讨论</tab-item>
        </tab>
        <comment v-if="actIndex===2"></comment>
        <catalog v-if="actIndex===0"></catalog>
        <lesson-work v-if="actIndex===1"></lesson-work>
    </div>

</template>

<script>
import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
import Catalog from './catalog'
import Comment from './comment'
import LessonWork from './lesson-work'
export default {
    components: {
        Tab,
        TabItem,
        Sticky,
        Divider,
        XButton,
        Swiper,
        SwiperItem,        
        Catalog,
        Comment,
        LessonWork
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
            this.actIndex = idx;
        }
    }
}
</script>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .vux-tab-item{
        font-size:px2rem(28px)!important;
        font-weight: bold;
    }
</style>

