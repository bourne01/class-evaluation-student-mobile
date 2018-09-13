<template>
    <div class="state">
        <!-- 完成 -->
        <div class="complete" v-if="isWorkDone">
            <div class="completion-of-progress">
               <ul class="top-one">
                    <li class="one-child">
                       <span>88分</span>
                       <span class="completed">待完成</span>
                       <span>暂未开放</span>
                    </li>
                    <li class="two-child">
                        <span>课前作业</span>
                       <span class="work-class">课中作业</span>
                       <span>课后作业</span>
                    </li>
                    <div class="selected"></div>
                    <div class="progress">
                        <div class="carry-out"></div>
                    </div>
                    <div class="icon-complete">
                             <img :src="require('../../../assets/home/done.png')" alt="" class="pic">     
                             <div class="circle"></div>
                             <div class="circle-right"></div>
                    </div>
               </ul>
            </div>
           <ul class="fraction">
               <li><h3>88分</h3></li>
               <li>恭喜你，优于96%的学生！</li>
           </ul>
            <div class="the-time">
                   <ul class="date-box">
                       <li>交卷时间:2018/08/22 18:35</li>
                       <li class="time">10.12.20</li>
                   </ul>
            </div>
        </div>
        
        <div class="uncomplete" v-else>
             <div class="completion-of-progress">
               <ul class="top-one">
                    <li class="one-child">
                       <span id="num">58分</span>
                       <span class="completed">待完成</span>
                       <span>暂未开放</span>
                    </li>
                    <li class="two-child">
                        <span>课前作业</span>
                       <span class="work-class" id="work-class">课中作业</span>
                       <span>课后作业</span>
                    </li>
                    <div class="selected" id="selected"></div>
                    <div class="progress" id="progress">
                        <div class="carry-out" id="carry-out"></div>
                    </div>
                    <div class="icon-complete">
                             <img :src="require('../../../assets/home/done.png')" alt="" class="pic">     
                             <div class="circle"></div>
                             <div class="circle-right"></div>
                    </div>
               </ul>
            </div>
                <ul class="complete-mes">
                    <li class="difficulty-value">
                        <span>难度值</span>
                        <i></i>
                        <i></i>
                        <i></i>
                    </li>
                    <li class="complete-num">已有10位同学完成课后作业</li>
                    <li class="right-off" @click="goAnswerQuestion">马上完成</li>
                </ul>
            <div class="the-time">
                <ul class="date-box">
                    <li>交卷时间:2018/08/22 18:35</li>
                    <li class="time">10.12.20</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isWorkDone:false,//作业是否已经完成
        }        
    },
    methods:{
        /**@function 监听点击马上完成按钮事件，跳转作业页面 */
        goAnswerQuestion(){
            this.$router.push("/question");
        }
    }
}
</script>
<style lang="scss" scoped>
     @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    //   完成!
    .complete{
        height: px2rem(429px);
        text-align: center;
        color: #ff9000;
        line-height: px2rem(56px);
        font-size: px2rem(24px);
    }
    h3{
        font-size: px2rem(68px);
    }
    .fraction li:first-child{
        margin-bottom: px2rem(20px);
    }
    .completion-of-progress{
        height: px2rem(156px);
        position: relative;
        margin-bottom: px2rem(68px);
    }
    #num{
        color: #fa5b4a;
    }
    .top-one{
        width: px2rem(670px);
        margin: 0 auto;
        font-size: px2rem(22px);
        color: #acadb0;
        line-height: px2rem(82px);
    }
    .one-child span:first-child{
        color: #ff9000;
        float: left;
    }
    .two-child{
        font-size: px2rem(24px);
    }
    .two-child span:first-child{
        float: left;
        color: #171a20;
    }
    .top-one span:last-child{
        float: right;
    }
    .top-one .completed{
        margin-left: px2rem(40px);
    }
    .icon-complete{
         width: px2rem(670px);
         height: px2rem(30px);
         position: absolute;
         top: px2rem(71px);
         left: px2rem(34px);
    }
    .progress{
        width: px2rem(640px);
        height: px2rem(4px);
        background: #f1f1f1;
        position: absolute;
        top: px2rem(82px);
        left: px2rem(50px);
    }
    #progress{
        background: #acadb0;
    }
    .carry-out{
        width: px2rem(143px);
        height: px2rem(4px);
        background: #22cb64;
        position: absolute;
        top: 0;
        left: px2rem(6px);
    }
    #carry-out{
        width: px2rem(310px);
    }
    .pic{
        width: px2rem(25px);
        height: px2rem(25px);
        float: left;
    }
    .circle-right{
        float: right;
    }
    .circle{
        float: left;
        position: absolute;
        left: px2rem(328px);
    }
    .circle,.circle-right{
        width: px2rem(10px);
        height: px2rem(10px);
        border-radius: 100%;
        border: 2px solid #acadb0;
        background: white;
        margin-top: px2rem(4px);
    }
    .selected{
        width: px2rem(90px);
        height: px2rem(4px);
        background: #fa5b4a;
        border-radius: 20px;
        position: absolute;
        bottom: 0;
    }
    #selected{
        position: absolute;
        bottom: 0;
        left: px2rem(330px);
    }
    // 未完成！
    .uncomplete{
         height: px2rem(550px);
         text-align: center;
         color: rgb(117, 115, 230);
         margin: 0 auto;
         font-size: px2rem(24px);
    }
    .difficulty-value{
         height: px2rem(30px);
         line-height: px2rem(28px);
         padding-left: px2rem(280px);
         margin-bottom: px2rem(20px);
         font-size: px2rem(22px);
         color: #feba50;
    }
     .difficulty-value span{
         float: left;
         margin-right: px2rem(10px);
     }
     #work-class{
         color: #171a20;
     }
     i{
         display: block;
         width: px2rem(28px);
         height: px2rem(28px);
         background-image: url(../../../assets/svg/star-yellow.svg);
         float: left;
         margin-left: px2rem(10px);
     }
     .complete-num{
         color: #171a20;
         margin-bottom: px2rem(60px);
     }
     .right-off{
         width: px2rem(238px);
         height: px2rem(58px);
         border-radius: px2rem(29px);
         background: -webkit-linear-gradient(left bottom,#74c756,#28d07e);
		 background: -o-linear-gradient(left bottom,#74c756,#28d07e);
		 background: -mos-linear-gradient(left bottom,#74c756,#28d07e);
		 background: -moz-linear-gradient(left bottom,#74c756,#28d07e);
		 background: linear-gradient(left bottom,#74c756,#28d07e);
         color: white;
         line-height: px2rem(58px);
         margin-left: px2rem(260px);
         font-size: px2rem(28px);
         margin-bottom: px2rem(60px);
     }
    // 共用
    .the-time{
        width: px2rem(710px);
        height: px2rem(56px);
        border-radius: px2rem(10px);
        background-color: rgb(243, 243, 246);
        margin: 0 auto;
        margin-top: px2rem(20px);
    }
    .date-box{
        width: px2rem(633px);
        margin: 0 auto;
        line-height: px2rem(56px);
    }
    .date-box li{
        list-style: none;
        float: left;
        font-size: px2rem(22px);
        color: #939aad;
    }
    .the-time .time{
        float: right;
    }
    li{
       list-style: none;
       text-align: center;
    }
</style>
