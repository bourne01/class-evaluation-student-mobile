<template>
    <div class="background-color">
        <div class="search">
            <searchbar></searchbar>
        </div>
        <div class="history">
            <history></history>
        </div>
        <div class="hot">
            <hot></hot>
        </div>
    </div>
</template>
<script>
import Searchbar from '../components/search/search-bar'
import History from '../components/search/history'
import Hot from '../components/search/hot'
export default {
    components:{
        Searchbar,
        History,
        Hot
    }
    
}
</script>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .background-color{
        background: #f3f3f6;
    }
    .search{
        height: px2rem(88px);
        background: white;
        margin-bottom: px2rem(10px);
    }
    .history{
        height: px2rem(230px);
        background: white;
        margin-bottom: px2rem(10px);
    }
    .hot{
        height: px2rem(956px);
        background: white;

    }
</style>