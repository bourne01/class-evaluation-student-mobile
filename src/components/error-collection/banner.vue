<template>
    <div class="error"> 
        <img :src="require('../../assets/svg/back-white.svg')" alt="" class="back" @click="goBack">
        <img :src="banner"/>
        <p class="subject-problem">我的语文错题</p>
        <div class="random-review">随机复习</div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            courseList:['chinese','english','math','biology','history','morality','geography'],    
            banner:'',
        }
    },    
    methods:{
        /**@function 返回 */
        goBack(){
            history.go(-1);
        }
    },

    mounted(){
        let courseIndex = this.$route.query.courseIndex;
        this.banner = require('../../assets/error-collection/'+this.courseList[courseIndex]+'-banner.png');
    }
}
</script>


<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .error{
        width: px2rem(750px);
        height: px2rem(312px);
        position: relative;
    }
    .back{
        position:absolute;
        top:px2rem(40px);
        left:px2rem(40px);
        z-index: 100;
        width:px2rem(48px);
        height:px2rem(90px)
    }
    img{
        position: absolute;
        width: px2rem(750px);
        height: px2rem(312px);
    }
    .subject-problem{
        position: absolute;
        font-size: px2rem(32px);
        padding-top: px2rem(126px);
        padding-left: px2rem(364px);
        padding-bottom: px2rem(15px);
        font-family: 'PingFang-SC-Bold';
        color: white;
    }
    .random-review{
        position: absolute;
        width: px2rem(172px);
        height: px2rem(40px);
        background: white;
        font-size: px2rem(24px);
        border-radius: px2rem(20px);
        text-align: center;
        color: #FF8E3D;
        line-height: px2rem(40px);
        margin-left:  px2rem(358px); 
        top: px2rem(186px);
        font-family: 'PingFang-SC-Medium';
    }
    
</style>