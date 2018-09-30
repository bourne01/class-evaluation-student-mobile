<template>
    <div class="question">
        <!-- 课前、课后与学生讨论选项卡区已经有现成的不用再编写 -->
        <tab 
            :line-width="3" custom-bar-width="4em"
            default-color="#acadb0"
            active-color="#fa5b4a"
            >
            <tab-item  @on-item-click="onTabClick">待复习 {{246}}</tab-item>
            <tab-item selected @on-item-click="onTabClick">已复习 {{28}}</tab-item>
            <tab-item @on-item-click="onTabClick">重复错 {{8}}</tab-item>
        </tab>
        <question :error-type="errType" v-for="idx in 3" :key="idx"></question>
    </div>

</template>

<script>
import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
import Question from './question'
export default {
    components: {
        Tab,
        TabItem,
        Sticky,
        Divider,
        XButton,
        Swiper,
        SwiperItem,        
        Question,
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
    .question{
        background:#f3f3f6;
        padding-bottom:px2rem(76px);
    }
</style>

