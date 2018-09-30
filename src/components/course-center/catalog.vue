<template>
    <div class="chapters">
        <div class="chapter"  v-for="idx in 2" :key="idx">
            <p>第一章</p>
            <ul class="chapter-catalog">
                <li class="first">
                    第1课：Sublime Text代码
                    <span @click="onClick('play')">
                        <img :src="require('../../assets/svg/play.svg')" alt="" class="play">
                    </span>
                </li>
                <li class="second">
                    第2课：Sublime Text代码
                    <span>
                        <img :src="require('../../assets/svg/more.svg')" alt="" class="play">
                    </span>
                </li>
                <li
                    >第3课：Sublime Text代码
                    <span>
                        <img :src="require('../../assets/svg/lock.svg')" alt="" class="play">
                    </span>
                </li>
                <li>
                    第4课：Sublime Text代码
                    <span>
                        <img :src="require('../../assets/svg/more.svg')" alt="" class="play">
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        /**
         * @function 监听点击图标事件
         * @param {图标类型} type
         */
        onClick(type){
            switch(type){
                case 'play':
                    this.$root.bus.$emit('play',1)
                    break;
            }
        },
    },
}
</script>

<style lang="scss" scoped>
     @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }    
    .chapters{
        width: px2rem(750px);
        height: px2rem(900px);
        background-color: #f3f3f6;
        overflow-y: scroll;
    }
    .course-catalog{
        height: px2rem(98px);
        margin: 0 auto;
        line-height: px2rem(40px);
        margin-bottom: px2rem(20px);
        font-size: px2rem(32px);
        margin-bottom: px2rem(10px);
        background: white;
        position: relative;
        color: #171a20;
        line-height: px2rem(98px);
    }
    .catalog{
        margin-left: px2rem(40px);
    }
    .close{
        width: px2rem(40px);
        height: px2rem(40px);
        display: block;
        position: absolute;
        top: px2rem(30px);
        right: px2rem(40px);
    }
    .chapter{
        height: px2rem(516px);
        background: white;
        margin-bottom: px2rem(10px);
    }
    p{
        height: px2rem(70px);
        text-align: center;
        font-size: px2rem(24px);
        line-height: px2rem(70px);
    }
    .chapter-catalog li{
           list-style: none;
           height: px2rem(109px);
           border-top: 1px solid #f1f1f1;
           line-height: px2rem(109px);
           font-size: px2rem(28px);
           padding: 0 px2rem(40px);
    }
    .first{
        color: #acadb0;
    }
    .second{
        color: #2185ff;
    }
    .chapter-catalog span,.chapter-catalo img{
        width: px2rem(36px);
        height: px2rem(36px);
        float: right; 
        margin-top: px2rem(10px);
    }
</style>

