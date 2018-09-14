<template>
    <div>
        <!-- 题目包括错误与正确的样式 -->
         <div class="head">
             <span class="back" @click="goBack"></span>
             <span class="month">04 /</span>
             <span>20</span>
             <span class="all-question" @click="onClick('AllQuestion')"></span>
        </div>
        <div class="bj-color">
         <div class="problem-area">
            <div class="types">单选</div>
            <h4>04.当前计算机的应用领域极为广泛，但其应用最早的 前计算机的应用领域极为广泛，但其应用最早的领域 的领域是____。</h4>
            <ul class="option">
                <div class="right"><img :src="require('../../../../assets/home/done.png')" alt="" ></div>
                <div class="wrong"><img :src="require('../../../../assets/home/undone.png')" alt="" ></div>
                <li class="topic-one">A  数据处理</li>
                <li class="topic-two">B  科学计算</li>
                <li>C  人工智能</li>
                <li>D  过程控制</li>

            </ul>
        </div>
       </div>
    </div>
</template>
<script>
export default {
    components:{

    },
    methods:{
        /**
         * @function 监听点击全部试题图标，发送点击事件 
         * @param {点击的对象类型} type
         */
        onClick(type){
            console.log("Event:All Question");
            if(type === 'AllQuestion'){
                
                this.$root.bus.$emit('all-question');
            }
        },
        /**@function 监听返回按钮事件，回退到上一页 */
        goBack(){
            history.go(-1);
        }
    },
    mounted(){
        console.log("I M mounting...");
    }
    
}
</script>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .head{
        height: px2rem(88px);
        border-bottom: 1px solid #f3f3f6;
        text-align: center;
        line-height: px2rem(88px);
        font-size: px2rem(28px);
        padding: 0 px2rem(40px);
        background: white;
    }
    .bj-color{
        background: #f3f3f6;
        padding-top: px2rem(30px);
        padding-bottom: px2rem(80px);
    }
    .back,.all-question{
        width: px2rem(49px);
        height: px2rem(49px);
        display: block;
        margin-top: px2rem(20px);
    }
    .back{
        background: url(../../../../assets/svg/back.svg);
        float: left;
    }
    .all-question{
        background: url(../../../../assets/svg/all-question.svg);
        float: right;
    }
    .month{
        color: rgb(172, 173, 176);
    }
    .problem-area{
        width: px2rem(670px);
        margin: 0 auto;
        font-size: px2rem(28px);
    }
    .types{
        width: px2rem(90px);
        height: px2rem(40px);
        border-radius: px2rem(20px);
        background: #d4d4d4;
        color: white;
        font-size: px2rem(22px);
        text-align: center;
        line-height: px2rem(40px);
        margin-bottom: px2rem(19px);
    }
    h4{
        margin-bottom: px2rem(80px);
    }
    .option{
        width: px2rem(630px);
        margin: 0 auto;
        font-size: px2rem(24px);
        position: relative;
    }
    li{
        height: px2rem(72px);
        list-style: none;
        color: #585a60;
        line-height: px2rem(72px);
        padding-left: px2rem(60px);
        margin-bottom: px2rem(20px);
    }
    li:last-child{
        margin-bottom: 0;
    }
    img,.right,.wrong{
        width: px2rem(32px);
        height: px2rem(32px);
    }
    .topic-one{
        color: rgb(34, 203, 100);
    }
    .topic-two{
        color: rgb(250, 91, 73);
    }
    .right{
        position: absolute;
        top: px2rem(20px);
        left: 0;
    }
    .wrong{
        position: absolute;
        top: px2rem(114px);
        left: 0;
    }
</style>


