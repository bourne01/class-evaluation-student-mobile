<template>
    <div class="opencourse">
        <img class="portrait" src="../../assets/home/course-hg.png"/>
        <div class="title">
            <h3>计算机科学与技术计算机科学与技术计算机科学与技术</h3>
            <div class="class">高一</div>
            <div class="course">数学</div>
        </div>
        <div class="box">
            <p class="teacher">教师：王老师</p>
            <p class="data">315</p>
            <img class="comment" src="../../assets/home/comment.png"/>
            <p class="data">2465</p>
            <img src="../../assets/home/browse.png"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .opencourse{
        width: px2rem(750px);
        height: px2rem(248px);
        background: white;
        margin-bottom: px2rem(2px)
    }
    .portrait{
        width: px2rem(188px);
        height: px2rem(188px);
        border-radius: px2rem(8px);
        margin-top: px2rem(30px);
        margin-left: px2rem(30px);
        margin-right: px2rem(20px);
        float: left;
    }
    .title{
        width: px2rem(484px);
        padding-top: px2rem(40px);
        height: px2rem(145px);
        float: left;
    }
    .title h3{
        width: px2rem(460px);
        color: #171A20;
        font-size: px2rem(28px);
        padding-bottom: px2rem(20px);
        line-height: px2rem(28px);
    }
    .title .class{
        background: #6F89FF;
        color: #FEFFFF;
        font-size: px2rem(22px);
        width: px2rem(66px);
        height: px2rem(34px);
        margin-right: px2rem(10px);
        float: left;
        border-radius: px2rem(2px);
        margin-bottom: px2rem(34px);
        text-align: center;
        font-family: 'PingFangSCRegular';
        line-height: px2rem(34px);
    }
    .title .course{
        /* width: px2rem(66px); */
        padding:0 px2rem(6px);
        height: px2rem(34px);
        float: left;
        background: #F3F3F6;
        color: #171A20;
        border-radius: px2rem(2px);
        font-size: px2rem(22px);
        font-family: 'PingFangSCRegular';
        text-align: center;
        line-height: px2rem(34px);
    }
    .box{
        width: px2rem(482px);
        margin-left: px2rem(238px);
    }
    .teacher{
        font-size: px2rem(24px);
        line-height: px2rem(40px);
        color: #585A60;
        font-family: 'PingFangSCRegular';
        float: left;
    }
    .data{
        float: right;
        font-family: 'PingFang-SC-Medium';
        font-size: px2rem(22px);
        color: #ACADB0 ;
        line-height: px2rem(40px);
    }
    .box img{
        float: right;
        width: px2rem(40px);
        height: px2rem(40px);
        margin-right: px2rem(8px);
    }
    .comment{
        margin-left: px2rem(30px);
    }
</style>
