<template>
    <div>
        <div class="state">
            <work-state></work-state>
        </div>
        <div class="errors">
            <credit-errors></credit-errors>
        </div>
        <div class="count">
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
