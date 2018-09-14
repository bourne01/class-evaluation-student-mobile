<template>
    <article>
        <div id="wrap">
            <rank-type></rank-type>
            <div id="body">
                <section>
                    <rank-tab></rank-tab>
                    <Qian v-for="idx in 3" :key="idx"></Qian>
                    <Hou v-for="idx in 4" :key="idx"></Hou>
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
import Qian from '../components/credit-rank/qiansan'
import Hou from '../components/credit-rank/hou'
import MyRank from '../components/credit-rank/my-rank'
export default {
    components:{
        RankType,
        RankTab,
        Qian,
        Hou,
        MyRank,
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
       margin-bottom: px2rem(108px);
       height: px2rem(1495px);
       position: relative;} 
   #body{
       width: px2rem(670px);
       height: px2rem(1158px);
       margin:  0 auto;
       border: 6px solid #fea201;
       border-radius: 20px;
       background: white;
       }
    
</style>

