<template>
    <div>
        <div v-transfer-dom class="question-number">
            <popup v-model="isShow" position="top" :show-mask="true">
                <div class="">
                    <div class="topic-box">
                        <div class="finished" v-for="idx in 3" :key="idx">1</div>
                        <div class="current">2</div>
                        <div class="unfinished"  v-for="idx in 20" :key="idx">3</div>
                    </div>
                </div>
            </popup>
        </div>
    </div>
</template>

<script>
import {TransferDom, Popup} from 'vux'
export default {
    directives: {
        TransferDom
    },
    components:{
        Popup
    },
    data(){
        return{
            isShow:false,
        }
    },
    mounted(){
        this.$root.bus.$on('all-question',()=>{
            this.isShow = !this.isShow;
        })
    }
    
}
</script>

<style lang="scss">
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .vux-popup-mask{//此处更改是弹窗遮罩的全局样式，如果其它组件要用到弹窗则要初始化top:0
        top: px2rem(88px)!important;
    }    
</style>


<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
   .question-number .vux-popup-top{
        top: px2rem(88px)!important;
    }    
    .topic-box{
        width: px2rem(670px);
        margin: 0 auto;
        margin-top: px2rem(15px);
    }
    .topic-box div{
        float: left;
        width: px2rem(56px);
        height: px2rem(56px);
        border-radius: px2rem(8px);
        font-size: px2rem(24px);
        text-align: center;
        line-height: px2rem(56px);
        margin: 0 px2rem(12px);
        margin-bottom: px2rem(40px);
    }
    .finished{
        background: rgb(212, 245, 224);
        color: #13b653;
    }
    .current{
        background: rgb(33, 133, 225);
        color: white;
    }
    .unfinished{
        background: rgb(231, 231, 231);
        color: #acadb0;
    }
</style>