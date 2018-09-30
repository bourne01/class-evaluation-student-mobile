<template>
    <article class="home">
        <my-header>
            <span slot="left" class="header-left">
                <img :src="require('../assets/home/search.png')" alt="" @click="goSearch">
            </span>       
            <span slot="center" class="header-center">
                <course-tab></course-tab>
            </span>       
            <span class="header-right" slot="right">
                <img :src="require('../assets/home/notice.png')" alt="" @click="goNotice">     
            </span>            
        </my-header>
        <section class="banner">
            <banner></banner>
        </section>
        <section class="category">
            <course-category></course-category>
        </section>
        <section class="course">
            <template v-if="isOpenCourse">
                <open-course v-for="idx in 5" :key="idx"></open-course>
            </template>
            <template v-else><course v-for="idx in 5" :key="idx"></course></template>
                
            
        </section>
    </article>
</template>

<script>
import MyHeader from '../components/base/my-header'
import Banner from '../components/home/banner'
import Course from '../components/home/course'
import OpenCourse from '../components/home/opencourse'
import CourseCategory from '../components/home/course-category'
import CourseTab from '../components/home/course-tab'
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
            isOpenCourse:true
        }
    },
    computed:{
        isShow:function(){
            console.log('showshow......');
            return this.isOpenCourse;
        }
    },
    methods:{
        /**
         * @function 监听点击通知图标，跳转到消息页面
         */
        goNotice(){
            this.$router.push('/notice');
        },

        /**
         * @function 监听点击课程类别事件
         */
        onTabCourse(bl){
            console.log(typeof bl);
            if(bl)
                this.isShow = true;
            else
                this.isShow = false;
        }
    },
    mounted(){
        this.$root.bus.$on('open-course',(bl) => {
            console.log("home--------------");
            this.isOpenCourse = bl;
            console.log(this.isOpenCourse);
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
        background: #f3f3f6;
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

