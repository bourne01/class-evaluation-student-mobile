<template>
<div>
    <img :src="require('../../assets/credit-rank/daily.png')" alt="" >   
</div>
</template>

<script>

</script>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }

img{
    width: px2rem(750px);
    height: px2rem(248px);
    margin-right: px2rem(34px);}
</style>


