<template>
    <div class="collection-questions">
        <my-header class="my-header">
            <span slot="left" class="header-left" @click="goBack">
                <img :src="require('../assets/svg/back-black.svg')" alt="">
            </span>       
            <span slot="center" class="header-center">收藏的试题({{2}})</span>       
            <span class="header-right" slot="right">
            </span>   
        </my-header>
         <div class="test-questions"  v-for="idx in 5" :key="idx"> 
             <question></question>    
         </div>
             
    </div>
</template>

<script>
import MyHeader from '../components/base/my-header'
import Question from '../components/me/question'
export default {
    components:{
        MyHeader,
        Question,
    },
    methods:{
        /**
         * @function 返回上一页
         */
        goBack(){
            history.go(-1);
        }
    }
}
</script>
<style lang="scss" scoped>
@function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .my-header{
        background: white;

    }
    .header-left img{
        margin-left:px2rem(30px);
    }
    .collection-questions{
        background: #f3f3f6;
    }
</style>
