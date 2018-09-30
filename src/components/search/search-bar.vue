<template>
    <div class="search-bar">
        <div class="search-box">
            <input type="text" name="" id="" placeholder="请输入" v-model="keyword">
            <!-- <div class="red-line"></div> -->
            <span class="search"></span>
            <span class="close" @click="keyword=''"></span>
         </div>
        <span class="cancel" @click="goBack">取消</span>
    </div>
</template>

<script>
export default {
    data(){
        return{
            keyword:'',//搜索关键字
            
        }
    },
    methods:{
        /**@function 返回 */
        goBack(){
            history.go(-1);
        },
    },
}
</script>


<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .search-bar{
        height: px2rem(88px);
        font-size: px2rem(24px);
        color:#979797;
    }
    .search-box{
        width: px2rem(590px);
        height: px2rem(60px);
        position: relative;
        top: px2rem(14px);
        left: px2rem(40px);
    }
    input{
        width: px2rem(590px);
        height: px2rem(60px);
        background: #F1F1F1;
        border-radius: px2rem(30px);
        border: 0;
        padding-left:px2rem(70px);
        outline: none;
        box-sizing: border-box;
        caret-color:red;
    }
    input:hover{
        border:1px solid #2185FF;
    }
    .search{
        position: absolute;
        top: px2rem(7px);
        left: px2rem(15px);
        background: url(../../assets/search/magnifier.png);
    }
    .search,.close{
        display: block;
         width: px2rem(48px);
        height: px2rem(48px); 
    }
    .close{
        position: absolute;
        top: px2rem(7px);
        right: px2rem(22px);
        background: url(../../assets/search/close.png);
    }
    /* .red-line{
        width: px2rem(3px);
        height: px2rem(39px);
        background: #FF2741;
        position: absolute;
        top: px2rem(10px);
        left: px2rem(70px);
    } */
    .cancel{
        position: absolute;
        top: px2rem(30px);
        right: px2rem(43px);
    }
     input::placeholder {
        color: #171A20;
        font-size: px2rem(28px);
        padding-left: px2rem(4px);
        line-height: px2rem(60px);
        font-weight: 500;
     }
</style>