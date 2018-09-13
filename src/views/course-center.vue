<template>
    <div class="web-bj">
        <player class="play"></player>
        <div class="content">
            <course-introduction></course-introduction>
        </div>
        <div class="work-tab">
            <course-tab></course-tab>
        </div>        
    </div>
</template>

<script>
import Player from '../components/course-center/work/course-player'
import CourseTab from '../components/course-center/course-tab'
import CourseIntroduction from '../components/course-center/course-intro'
import State from '../components/course-center/work/state'
import Errors from '../components/course-center/work/credit-errors'
import Count from '../components/course-center/work/questions-count'
import Questions from '../components/course-center/questions/question'
export default {
    components:{
        CourseTab,
        Player,
        CourseIntroduction,
        State,
        Errors,
        Count,
        Questions,
        
    }
}
</script>
<style lang="scss" scoped>
     @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }    
    .web-bj{
        background: #f3f3f6;
    }
    .content{
        height: px2rem(188px);
        margin-bottom: px2rem(20px);
        background-color: white;
    }
   
</style>

