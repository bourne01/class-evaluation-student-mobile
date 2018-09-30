<template>
    <div class="notice">
        <my-header class="my-header">
            <span slot="left" class="header-left" @click="goBack">
                <img :src="require('../assets/svg/back-black.svg')" alt="">
            </span>       
            <span slot="center" class="header-center">消息({{2}})</span>       
            <span class="header-right" slot="right">
            </span>            
        </my-header>
        <section><undone></undone></section>
        <section><reward></reward></section>
        <section><done></done></section>
    </div>
</template>

<script>
import MyHeader from '../components/base/my-header'
import Done from '../components/notice/done'
import Reward from '../components/notice/reward'
import Undone from '../components/notice/undone'
export default {
    components:{
        MyHeader,
        Done,
        Reward,
        Undone,

    },
    methods:{
        /**
         * @function 返回上一页
         */
        goBack(){
            history.go(-1);
        }
    }
}
</script>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    } 
    .my-header{
        background: white;
    }
    .header-left img{
        margin-left:px2rem(30px);
    }
    .notice{
        height: px2rem(1334px);
        background: #f3f3f6;
    }
    
</style>