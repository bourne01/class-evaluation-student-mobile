<template>
    <div>
        <tab 
            :line-width="3" custom-bar-width="4em"
            default-color="#7573e6"
            active-color="#7573e6"
            >
            <tab-item selected>课前作业</tab-item>
            <tab-item>课后作业</tab-item>
            <tab-item>学生讨论</tab-item>
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
        SwiperItem
    },
}
</script>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .vux-tab{
        height:px2rem(88px)!important;
        line-height:px2rem(88px)!important;
    }
    .vux-tab-item{
        font-size:px2rem(28px)!important;
        font-weight: bold;
        height:px2rem(88px)!important;
        line-height:px2rem(88px)!important;
    }
</style>

