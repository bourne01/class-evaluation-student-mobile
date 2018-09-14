<template>
    <div>
        <div class="head">
             <span class="back" @click="goBack"></span>
             <span class="month">04 /</span>
             <span>20</span>
             <span class="all-question" @click="onClick('AllQuestion')"></span>
        </div>
        <div class="problem-area">
            <div class="types">多选</div>
            <h4>04.当前计算机的应用领域极为广泛，但其应用最早的 前计算机的应用领域极为广泛，但其应用最早的领域 的领域是____。</h4>
            <ul class="option">
                <li 
                    v-for="(item,idx) in questionItems" 
                    :key="idx"
                    @click="onSelect(idx)"
                    :class="{selected:idx===selectedIndex}">
                    <span>{{questionItems[idx]}}</span>
                </li>
            </ul>
        </div>
        <div class="tools">
            <span>
                <img :src="require('../../../assets/svg/correction.svg')" alt="">
                纠错
            </span>
            <span>
                <img :src="require('../../../assets/svg/favorite.svg')" alt="">
                收藏
            </span>
        </div>
    </div>
</template>

<script>
export default {
    components:{
    },
    data(){
        return{
            questionItems:['A  数据处理','B  科学计算','C  人工智能','D  过程控制'],
            selectedIndex:-1,//默认被选中的选项
        }
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
        },
        /**
         * @function 监听点击题目选项事件，给选中的题目改变样式 
         * @param {题目序号} index
        */
        onSelect(index){
            this.selectedIndex = index;
        },
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
    .back,.all-question{
        width: px2rem(49px);
        height: px2rem(49px);
        display: block;
        margin-top: px2rem(20px);
    }
    .back{
        background: url(../../../assets/svg/back.svg);
        float: left;
    }
    .all-question{
        background: url(../../../assets/svg/all-question.svg);
        float: right;
    }
    .month{
        color: rgb(172, 173, 176);
    }
    .problem-area{
        width: px2rem(670px);
        margin: 0 auto;
        margin-top: px2rem(30px);
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
    }
    li{
        width: px2rem(630px);
        height: px2rem(72px);
        list-style: none;
        color: #585a60;
        line-height: px2rem(72px);
    }
    .option .selected{
        background: #e0ecff;
        border-radius: px2rem(36px);
        color: rgb(33, 133, 255);
    }
    .option span{
        margin-left: px2rem(62px);
    }
    .tools{
        position: fixed;
        bottom:0;
        left:0;
        height:px2rem(98px);
        display:flex;
        justify-content: space-between;
        line-height:px2rem(98px);
        font-size:px2rem(24px);
        border-top:1px solid #f1f1f1;
        width:100%;
        padding-left:px2rem(50px);
        padding-right:px2rem(60px);
        box-sizing: border-box;
    }
    .tools img{
        width:px2rem(50px);
        vertical-align: middle;
    }
</style>

