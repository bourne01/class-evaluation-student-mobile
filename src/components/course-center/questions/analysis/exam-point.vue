<template>
    <div>
        <!-- 考点区域-->
        <div class="point">
              <span>考点：</span>
              <span class="computer">计算机的应用</span>
              <span><img :src="require('../../../../assets/svg/play-blue.svg')" alt="" class="play"></span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .point{
        width: px2rem(670px);
        height: px2rem(100px);
        margin: 0 auto;
        line-height: px2rem(100px);
        font-size: px2rem(22px);
    }
    .play{
        width: px2rem(35px);
        height: px2rem(35px);
        float: right;
        margin-top: px2rem(40px);
    }
    .computer{
        color: rgb(33, 133, 255);
    }
</style>