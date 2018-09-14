<template>
    <article>
        <my-header>
            <span slot="left" class="header-left"></span>       
            <span slot="center" class="header-center">智慧教室</span>       
            <span class="header-right" slot="right">
                <img :src="require('../assets/home/schedule.png')" alt="" @click="goSchedule">     
            </span>            
        </my-header>
        <section class="banner">
            <banner></banner>
        </section>
        <section class="course">
            <course v-for="idx in 5" :key="idx"></course>
        </section>
    </article>
</template>

<script>
import MyHeader from '../components/base/my-header'
import Banner from '../components/home/banner'
import Course from '../components/home/course'
export default {
    components:{
        MyHeader,
        Banner,
        Course,
    }
    
}
</script>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .header-center{
        font-size:px2rem(32px);
        color:#171a20;
    }
    .header-right{
        padding-right:px2rem(38px);
        text-align: right;
        box-sizing: border-box;
    }
    .banner{
        margin: 0 auto;
    }
    .course{
        background-color: #f3f3f6;
    }
    .course:last-child{
        padding-bottom: px2rem(120px);
    }
    
</style>

