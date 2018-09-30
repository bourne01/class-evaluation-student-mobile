<template>
    <article class="me">
        <me-header></me-header>
        <badges></badges>
    </article>
</template>




<script>
import MeHeader from '../components/me/me-header'
import Badges from '../components/me/badges'
export default {
    components:{
        MeHeader,
        Badges,
    }
    
}
</script>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }

    .me{
        background: #f3f3f6;
        height: px2rem(1334px);
    }
</style>