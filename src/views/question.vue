<template>
    <div>
        <!-- <answer-question></answer-question> -->
        <question-number></question-number>
        <check-analysis></check-analysis>
    </div>
</template>

<script>
import AnswerQuestion from '../components/course-center/questions/question'
import CheckAnalysis from '../components/course-center/questions/analysis'
import QuestionNumber from '../components/course-center/questions/question-number-popup'
export default {
    components:{
        AnswerQuestion,
        CheckAnalysis,
        QuestionNumber,
    },
    
}
</script>
<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
   
    
</style>




