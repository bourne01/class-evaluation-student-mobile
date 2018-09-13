<template>
    <div class="bj-color">
        <myquestion></myquestion>
        <div class="answer">
            <answer></answer>
        </div>
        <div class="analysis">
            <analysis></analysis>
        </div>
        <div class="exam">
            <exam></exam>
        </div>
        <comment  v-for="idx in 5" :key="idx"></comment>
        <compose></compose>
        <!-- 
            已经做完，查看解析的题目，相关组件都应存于文件夹“analysis”中        
        -->
    </div>
</template>
<script>
import Myquestion from '../questions/analysis/question'
import Answer from '../questions/analysis/answer'
import Analysis from '../questions/analysis/analysis'
import Exam from '../questions/analysis/exam-point'
import Comment from '../comment/comment'
import Compose from '../comment/compose-comment'
export default {
    components:{
       Myquestion,
       Answer,
       Analysis,
       Exam,
       Comment,
       Compose
    },
    
}
</script>
<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .bj-color{
        background: #f3f3f6;
    }
   .answer{
       height: px2rem(88px);
       border-bottom: 1px solid #f3f3f6;
       background: white;
   }
    .analysis{
        border-bottom: 1px solid #f3f3f6;
        height: px2rem(518px);
        background: white;
    }
    .exam{
        height: px2rem(100px);
        margin-bottom: px2rem(20px);
        background: white;
    }
</style>
