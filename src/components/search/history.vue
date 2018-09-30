<template>
    <div class="search-record">
        <div class="top">
            <span>历史记录</span>
            <span class="delete" @click="onClick"></span>
        </div>
        <ul class="history-box" v-for="(item,idx) in historySearchList" :key="idx">
            <li>{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            historySearchList:['高一数学','初一数学','五年级数学上册','初三语文',],
        }
    },
    methods:{
        /**@function 清空历史搜算记录 */
        onClick(){
            this.historySearchList = [];
        }
    }
}
</script>


<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .search-record{
        max-height: px2rem(230px);
        font-size: px2rem(24px);
        color: #616475;
        padding-top: px2rem(18px);
    }
    .top{
        height: px2rem(48px);
        padding: 0 px2rem(41px);
        margin-bottom: px2rem(12px);
    }
    span:first-child{
        color: #171A20;
        float: left;
        line-height: px2rem(46px);
    }
    .delete{
        background: url(../../assets/search/delete.png);
        display: block;
        width: px2rem(48px);
        height: px2rem(48px);
        float: right;
    }
    .history-box{
        list-style: none;
        margin-left: px2rem(41px);
    }
    li{
        height: px2rem(48px);
        display: inline-block;
        background: #F1F1F1;
        border-radius: px2rem(24px);
        padding: 0  px2rem(30px);
        float: left;
        margin-right: px2rem(20px);
        margin-bottom: px2rem(20px);
        line-height: px2rem(48px);
    }
</style>
