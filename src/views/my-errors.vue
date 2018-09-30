<template>
    <div class="background-color">
        <my-header class="my-header">
            <span slot="left" class="header-left">
                <!-- <img :src="require('../assets/svg/back-black.svg')" alt=""> -->
            </span>       
            <span slot="center" class="header-center">我的错题</span>       
            <span class="header-right" slot="right">
            </span>            
        </my-header>
        <section class="course-wrapper">
            <course 
                :index='idx'
                v-for="idx in 8" 
                :key="idx" 
                class="course"
                ></course>
        </section>
        <nav></nav>
    </div>
</template>

<script>
import MyHeader from '../components/base/my-header'
import Course from '../components/error-collection/course'
export default {
    components:{
        Course,
        MyHeader,
    }
}
</script>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .background-color{
        background: #f3f3f6;
    }
    .header-left img{
        margin-left:px2rem(30px);
    }
    .header-center{
        font-size:px2rem(32px);
        color:#171a20;
        margin-bottom: px2rem(10px);
    }
    .course-wrapper{
        display: flex;
        flex-flow:wrap; 
        overflow-y: auto;
    }
    section,.my-header{
         background: white;
    }
    .my-header{
        margin-bottom: px2rem(10px);
    }
    .course{
        border: solid #f3f3f6;
        border-width: 0px px2rem(4px) px2rem(4px) 0px;
        float: left;
        box-sizing: border-box;
        margin-right: px2rem(-4px);
    }
</style>

