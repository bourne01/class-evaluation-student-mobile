<template>
    <div class="course-category">
        <div class="hot-course">
            <img src="../../assets/home/hot-course.png"/>
            <p>热门课程</p>
        </div>
        <div class="recommend-course">
            <img src="../../assets/home/recommend-course.png"/>
            <p>名师推荐</p>
        </div>
        <div class="excellent-course">
            <img src="../../assets/home/excellent-course.png"/>
            <p>精品课程</p>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .course-category{
        width: px2rem(750px);
        height: px2rem(140px);
        background: white;
        position: relative;
    }
    img{
        padding-top: px2rem(10px);
        width: px2rem(68px);
        height: px2rem(68px);
        padding-left: px2rem(10px);
    }
    p{
        font-family: 'PingFangSCRegular';
        font-size: px2rem(24px);
        color: #616475;
        line-height: px2rem(24px);
    }
    .hot-course{
        padding-left: px2rem(114px);
        position: absolute;
    }
    .recommend-course{
        padding-left: px2rem(338px);
        position: absolute;
    }
    .excellent-course{
        padding-left: px2rem(570px);
        position: absolute;
    }
</style>
