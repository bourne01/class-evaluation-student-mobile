<template>
    <article>
        <div id="wrap">
            <rank-type></rank-type>
            <div id="body">
                <section>
                    <rank-tab></rank-tab>
                </section> 
            </div>
            <section>
                <my-rank></my-rank>
            </section>
        </div>
    </article>
</template>

<script>
import RankType from '../components/credit-rank/rank-type'
import RankTab from '../components/credit-rank/rank-tab'
import MyRank from '../components/credit-rank/my-rank'
export default {
    components:{
        RankType,
        RankTab,
        MyRank,
    },
    mounted(){
        
    }
}
</script>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
   #wrap{
       background: #fec001;
       /* margin-bottom: px2rem(128px); */
       position: relative;
       padding-bottom:px2rem(128px)} 
   #body{
       width: px2rem(682px);       
       margin:  0 auto;
       border: 6px solid #fea201;
       border-radius: 20px;
       background: white;
       }
    
</style>

