<template>
    <div class="course" @click="goCourseCenter">
        <img class="picture" src="../../assets/home/course-hg.png"/>
        <div class="title">
            <h2>计算机科学与技术</h2>
            <div class="message">
                <div class="position">
                    <img class="icon" src="../../assets/home/classroom.png" />
                    <p>教室</p>
                    <span>B 512</span>
                </div>
                <div class="teacher">
                    <img class="icon" src="../../assets/home/teacher.png"/>
                    <p>教师</p>
                    <span>王老师</span>
                </div>
            </div>
            <div class="course-box">
                <img class="icon" src="../../assets/home/course.png"/>
                <p>课程</p>                
            </div>
            <div>
                <a class="Latest-Chapters" href="jacascript:;">第二章·第2课 计算机组成原理</a>
                <p class="Chapters-Learned">第二章·第2课 微机接口技术</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components:{
        course:{},//课程对象
    },
    methods:{
        /**@function 进入课程中心 */
        goCourseCenter(){
            this.$router.push('/course-center');
        }
    },
    
}
</script>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }  
    p{
        color: #acadb0;
    }  
    a{
        color: #2185ff;
    }
    .course{
        height: px2rem(188px);
        background: white;
        margin-bottom: px2rem(20px);
        padding: px2rem(30px);
        font-size:px2rem(24px);
    }
    .picture{
        width: px2rem(188px);
        height: px2rem(188px);
        border-radius: px2rem(18px);
        float: left;
        margin-right: px2rem(30px);
    }
    .title{
        width: px2rem(442px);
        height: px2rem(163px);
        margin-top: px2rem(10px);
        float: left;
    }
    .title h2{
        font-size: px2rem(28px);
        font-weight: none;
        margin-bottom: px2rem(24px);
    }
    .position .icon{
        float: left;
        margin-right: px2rem(11px);
        width: px2rem(25px);
    }
    .message{
        height: px2rem(30px);
        margin-bottom: px2rem(22px);
    }
    .position p{
        font-size: px2rem(22px);
        margin-right: px2rem(15px);
        line-height: px2rem(26px);
        float: left;
    }
    .position span{
        line-height: px2rem(26px);
        float: left;
    }
    .position{
        margin-right: px2rem(15px);
        float: left;
    }
    .teacher{
        float: right;
        height: px2rem(30px);
    }
    .teacher .icon{
        width: px2rem(24px);
        margin-right: px2rem(12px);
        float: left;
    }
    .teacher p{
        line-height: px2rem(26px);
        margin-right: px2rem(13px);
        float: left;
    }
    .teacher span{
        line-height: px2rem(26px);
        float: left;
    }
    .course-box .icon{
        width: px2rem(22px);
        float: left;
        margin-right: px2rem(11px);

    }
    .course-box{
        margin-bottom: px2rem(17px);
        height: px2rem(22px);
        float: left;
    }
    .course-box p{
        line-height: px2rem(22px);
        margin-right: px2rem(13px);
        float: left;
    }
     .Latest-Chapters{
        line-height: px2rem(24px);
        margin-right: px2rem(13px);
        margin-bottom: px2rem(12px);
        float: left;
    }
    .Chapters-Learned{
        line-height: px2rem(18px);
        margin-right: px2rem(13px);
        color: #000;
    }
</style>