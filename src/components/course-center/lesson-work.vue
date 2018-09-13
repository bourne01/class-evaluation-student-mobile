<template>
    <div>
        <div class="state">
            <work-state></work-state>
        </div>
        <div class="errors" v-if="isWorkDone">
            <credit-errors></credit-errors>
        </div>
        <div class="count" v-if="isWorkDone">
            <question-count></question-count>
        </div>
    </div>
</template>

<script>
import WorkState from './work/state'
import CreditErrors from './work/credit-errors'
import QuestionCount from './work/questions-count'
export default {
    components:{
        WorkState,
        CreditErrors,
        QuestionCount,
    },
    data(){
        return{
            isWorkDone:false,//作业是否已经完成
        }
    },
    mounted(){
        this.$root.bus.$on('work-done',(bl)=>{
            this.isWorkDone = bl;
        })
    }
    
}
</script>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }  
    .state{
        height: px2rem(450px);
        background-color: white;
        margin-bottom: px2rem(20px);
    }
    .errors{
        height: px2rem(216px);
        background-color: white;
        margin-bottom: px2rem(20px);
    }
    .count{
        height: px2rem(216px);
        background-color: white;
    }
</style>
