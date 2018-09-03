<template>
    <article>
        <my-header>
            <span slot="left" class="header-left">此处可以略过</span>       
            <span class="header-right" slot="right">
                <img :src="require('../assets/home/schedule.png')" alt="" >     
            </span>            
        </my-header>
        <section class="banner">
            <banner></banner>
        </section>
        <section class="tab">
            <course-tab></course-tab>
        </section>
        <section class="course">
            <course v-for="idx in 5" :key="idx"></course>
        </section>
    </article>
</template>

<script>
import MyHeader from '../components/base/my-header'
import Banner from '../components/home/banner'
import CourseTab from '../components/home/course-tab'
import Course from '../components/home/course'
export default {
    components:{
        MyHeader,
        Banner,
        CourseTab,
        Course,
    }
    
}
</script>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .header-left{
        font-size:px2rem(28px);
        color:#171a20;
    }
    .header-right{
        
    }
    .banner{
        margin: 0 auto;
    }
    .tab{
        height: px2rem(108px);
    }
    .course{
        background-color: #f3f3f6;
    }
    .course:last-child{
        padding-bottom: px2rem(120px);
    }
    
</style>

