<template>
    <article class="home">
        <my-header class="my-header">
            <span slot="left" class="header-left">
                <img :src="require('../assets/home/search.png')" alt="" @click="onClick('search')">
            </span>       
            <span slot="center" class="header-center">
                <course-tab></course-tab>
            </span>       
            <span class="header-right" slot="right">
                <img :src="require('../assets/home/notice.png')" alt="" @click="onClick('notice')">     
            </span>            
        </my-header>
        <div class="placeholder"></div>
        <section class="banner">
            <banner></banner>
        </section>
        <section class="category" v-if="isOpenCourse">
            <course-category></course-category>
        </section>
        <section class="course">
            <template v-if="isOpenCourse===true">
                <open-course v-for="idx in 5" :key="idx"></open-course>
            </template>
            <template v-else>
                <course v-for="idx in 5" :key="idx">
            </course></template>
        </section>
    </article>
</template>

<script>
import MyHeader from '../components/base/my-header'
import Banner from '../components/home/banner'
import Course from '../components/home/course'
import OpenCourse from '../components/home/opencourse'
import CourseTab from '../components/home/course-tab'
import CourseCategory from '../components/home/course-category'
export default {
    components:{
        MyHeader,
        Banner,
        Course,
        OpenCourse,
        CourseTab,
        CourseCategory,
    },
    data(){
        return{
            isOpenCourse:false,//是否公开课，默认是公开课
        }
    },
    methods:{
        /**
         * @function 监听点击通知图标，跳转到消息页面
         */
        onClick(type){
            switch(type){
                case 'search':
                    this.$router.push('/search');
                    break;
                case 'notice':
                    this.$router.push('/notice');
                    break;
                default:
                    this.$msgbox('未知类型');
            }
        },

       
    },
    mounted(){
        //监听点击公开课或者我的课选项卡事件
        this.$root.bus.$on('open-course',(bl) => {
            this.isOpenCourse = bl;
        });
    }
    
    
}
</script>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .home{
        background-color:#f3f3f6;
    }
    .my-header{
        background-color:#fff;
        position:fixed;
        top:0;
        width:100%;
        z-index: 10;
    }
    .placeholder{
        height:px2rem(98px);
        background-color:#fff;
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
    .header-left{
        padding-left:px2rem(38px);
        box-sizing: border-box;
    }
    .banner{
        padding-top:px2rem(10px);
        margin: 0 auto;
        background-color: #fff;
    }
    .category{
        margin-bottom: px2rem(20px);
    }
    .course{
        background-color: #f3f3f6;
    }
    .course:last-child{
        padding-bottom: px2rem(120px);
    }
    
</style>

