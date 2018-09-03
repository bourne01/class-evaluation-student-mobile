<template>
    <div class="task" @click.stop=onStateClick>
        <ul class="work">
            <li class="complete">58分</li>
            <li class="complete" id="second">未完成</li>
            <li class="complete" id="default">默认好评</li>
            <li class="homework" id="before">课前作业</li>
            <li class="homework" id="second">课后作业</li>
            <li class="homework">课程评价</li>
        </ul>      
            <div class="pic">
                  <div class="one">
                        <img :src="require('../../assets/home/check.png')" alt="" class="check"> 
                    </div>
                  <div class="two">
                      <img :src="require('../../assets/home/uncheck.png')" alt="" class="uncheck"> 
                  </div>
                  <div class="three">
                      <img :src="require('../../assets/home/check.png')" alt="" class="check-two"> 
                  </div>
            </div>
         <div class="dashed"></div>
         <div class="dashed-two"></div>
    </div>
</template>

<script>
export default {
 methods:{
     /**@function 处理点击课程状态事件,且阻止事件冒泡 */
     onStateClick(){
         console.log("hi...");
     }
 }   
}
</script>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .task{
        width: px2rem(710px);
        height: px2rem(146px);
        background-color: white;
        border-bottom-left-radius: px2rem(10px);
        border-bottom-right-radius: px2rem(10px);
        position: relative;
    }
    .work li{
        list-style: none;
        float: left;
        font-size: px2rem(22px);
        color: #fa5b4a;
        width: px2rem(100px);
        height: px2rem(30px);
    }
    li:first-child{
        margin-left: px2rem(40px);
    }
    .complete{
        margin-top: px2rem(20px);
    }
    #default{
        color: #22cb64;
    }
    #second{
        margin-left: px2rem(170px);
        margin-right: px2rem(170px);
    }
    img{
        width: px2rem(26px);
        height: px2rem(26px);
        float: left;
    }
    .dashed{
        border-bottom: 1px dashed #bfc5d2;
        width: px2rem(254px);
        position: absolute;
        top: px2rem(76px);
        left: px2rem(70px);
    }
    .dashed-two{
        border-bottom: 1px dashed #bfc5d2;
        width: px2rem(270px);
        position: absolute;
        top: px2rem(76px);
        left: px2rem(368px);
    }
   .icon{
        width: px2rem(630px);
        height: px2rem(30px);
   }
    .pic{
        width: px2rem(630px);
        height: px2rem(30px);
        margin-left: px2rem(40px);
        position: absolute;
        top: px2rem(64px);
    }
    .work .homework{
        color: #171a20;
        margin-top: px2rem(44px);
    }
    #before{
        margin-left: px2rem(40px);
    }
    .three{
        float: right;
    }
    .two {
        margin-left: px2rem(294px);
    }
</style>