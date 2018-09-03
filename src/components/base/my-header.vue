<template>
  <div>
      <header>
            <slot name="left"></slot>
            <slot name="center"></slot>
            <slot name="right"></slot>
      </header>
  </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
    
    },
    created(){
        
    }
}
</script>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    header{
        display: flex;
        justify-content: space-between;        
    }
    .header-left,.header-right{
        height:px2rem(88px);
        line-height: px2rem(88px);
        font-weight: bold;
    }
    .header-left img,.header-right img{
        width: px2rem(56px);
        vertical-align: middle;
    }
    .header-center{
        height:px2rem(88px);
        line-height: px2rem(88px);
        text-align: center;
        color:rgb(28,38,57);
        font-family: 'FingFang';
    }
    /* .right{
        font-size:px2rem(36px);
        font-family: 'FingFang-SC-Heavy';
     } */
</style>


