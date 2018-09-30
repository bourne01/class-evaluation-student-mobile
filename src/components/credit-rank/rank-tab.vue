<template>
    <div>
        <!-- 课前、课后与学生讨论选项卡区已经有现成的不用再编写 -->
        <tab 
            :line-width="0" custom-bar-width="0"
            default-color="#ffffff"
            active-color="#2185FF"
            >
            <tab-item selected @on-item-click="onTabClick">班级排名</tab-item>
            <tab-item  @on-item-click="onTabClick">全校排名</tab-item>
        </tab>
        <rank-list></rank-list>
    </div>

</template>

<script>
import { Tab, TabItem, Sticky, Divider, XButton, Swiper, SwiperItem } from 'vux'
import RankList from './rank-list'
export default {
    components: {
        Tab,
        TabItem,
        Sticky,
        Divider,
        XButton,
        Swiper,
        SwiperItem,    
        RankList,    
    },
    data(){
        return{
            actIndex:0,//默认激活选项卡内容
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
    .vux-tab{
        border-top-left-radius: px2rem(20px);
        border-top-right-radius: px2rem(20px);
    }
    .vux-tab-item{
        font-size:px2rem(28px)!important;
        font-weight: bold;
        background-color:#FEA201!important;
    }
    .vux-tab-selected{
        background:none!important;
        font-size:px2rem(32px)!important;
        border-top-left-radius: px2rem(20px);
        border-top-right-radius: px2rem(20px);
    }
</style>

