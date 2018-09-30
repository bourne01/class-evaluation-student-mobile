<template>
    <div class="course" @click="goCourseDetail">
            <img :src="courseCover" alt="" @click="goSchedule"> 
            <span class="error-number">135道错题</span>
            <span class="subject">语文</span>
    </div>
</template>

<script>
export default {
    props:['index'],
    data(){
        return{
            courseList:['chinese','english','math','biology','history','morality','geography'],            
        }        
    },
    computed:{
        courseCover:function(){
            return require('../../assets/error-collection/'+this.courseList[this.index]+'.png');
        }
    },
    methods:{
        /**
         * @function 监听点击课程事件，跳转该课程的详情页   
         */
        goCourseDetail(){
            this.$router.push({name:'CourseErrorCollection',query:{courseIndex:this.index}});
        }
    },
}
</script>



<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .course{
        width:px2rem(248px);
        height:px2rem(320px);
        text-align: center;
        position: relative;
    }
    img{
        margin: px2rem(22px) px2rem(24px);
    }
    span{
        font-size: px2rem(24px);
        color: #ACADB0;
    }
    .error-number{
        position: absolute;
        bottom: px2rem(85px);
        left: px2rem(70px);
    }
    .subject{
        position: absolute;
        bottom: px2rem(50px);
        left: px2rem(97px);
        color: #E55D00;
        font-size: px2rem(28px);
    }
</style>
