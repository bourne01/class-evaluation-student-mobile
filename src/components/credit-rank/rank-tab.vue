<template>
    <div>
        <div id="classes"><a href="javescript:;">班级排名</a></div>
        <div id="school"><a href="#">全校排名</a></div>
        
    </div>
    
</template>
<script></script>
<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    div{margin: 0;padding: 0;}
    div{
        height: px2rem(88px);
        font-size: px2rem(28px);
        margin-bottom: px2rem(20px);}

    #classes{
        width: px2rem(335px);
        text-align: center;
        float: left;}
    #classes a{
        color: #7573e6;
        line-height: px2rem(88px);
        font-family: 'PingFang-SC-Medium';}
    #school{
        width: px2rem(335px);
        background: #fea201;
        text-align: center;
        float: left;}
    #school a{
        color: white;
        line-height: px2rem(88px);
        font-family: 'PingFang-SC-Medium';}
</style>

