<template>
    <div class="course" @click="goCourseCenter">
        <div class="subject">
            <ul class="chinese">
                <li><h3>语文</h3></li>
                <li class="right"><img :src="require('../../assets/home/time.png')" alt="" class="time"> <span>08:00-09:30</span></li>
            </ul>
        </div>
        <div class="course-infromation">
             <ul class="first-line">
                <li class="icon" id="one"><span><img :src="require('../../assets/home/course.png')" alt="" class="course-icon"></span><span>课程</span></li>
                <li class="icon"><span><img :src="require('../../assets/home/classroom.png')" alt="" class="course-icon"></span><span>教室</span></li>
                <li class="icon" id="last"><span><img :src="require('../../assets/home/teacher.png')" alt="" class="course-icon"></span><span>教师</span></li>
                <li class="chapter">第二章·第2课</li>
                <li class="chapter" id="class-num">B 512</li>
                <li class="chapter">王老师</li>
             </ul>
        </div>
        <div>
            <state></state>
        </div>
    </div>
</template>
<script>
import State from '../home/course-state'
export default {
    components:{
        State,
    },
    methods:{
        /**@function 跳转进入课程中心 */
        goCourseCenter(){
            this.$router.push('/course-center');
        }
    }
    
}
</script>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .course{
        width: px2rem(710px);
        height: px2rem(370px);
        margin: 0 auto;
        padding-top: px2rem(20px);
    }
    .subject{
        width: px2rem(710px);
        height: px2rem(78px);
        background-color: #bfc5d2;
        border-top-left-radius: px2rem(10px);
        border-top-right-radius: px2rem(10px);
    }
    h3{
        font-size: px2rem(28px);
        margin-left: px2rem(40px);
    }
    .chinese li{
        color: white;
        line-height: px2rem(78px);
    }
    li{
        float: left;
        list-style: none;
        font-size: px2rem(24px);
    }
    .chinese .right{
        float: right;
        font-size:px2rem(24px);
        margin-right: px2rem(62px);
    }
    .time{
        display: block;
        width: px2rem(32px);
        height: px2rem(32px);
        float: left;
        margin-top: px2rem(22px);
        margin-right: px2rem(20px);
    }
    .course-infromation{
        width: px2rem(710px);
        height: px2rem(146px);
        background-color: white;
        margin: 0 auto;
        border-bottom: 1px solid #f3f3f6;
        position: relative;
    }
    .icon{
        font-size: px2rem(12px);
        color: #bfc5d2;
        height: px2rem(32px);
        color: #bfc5d2;
        line-height: px2rem(35px);
        width: px2rem(90px);
        margin-right: px2rem(178px);
        margin-top: px2rem(30px);
    }
    #one{
        margin-left: px2rem(40px);
    }
    #last{
        margin-right: 0;
    }
    .course-icon{
        width: px2rem(32px);
        height: px2rem(32px);
        float: left;
        margin-right: px2rem(10px);
    }
    .chapter{
        margin-top: px2rem(20px);
        margin-left: px2rem(40px);
    }
    #class-num{
        margin-left: px2rem(150px);
        margin-right: px2rem(160px);
    }

</style>