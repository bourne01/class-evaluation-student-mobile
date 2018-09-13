<template>
    <div>
        <!--查看解析组件，包括错误率和难度值 -->    
        <div class="view-resolution">
             <div class="view">
                 <span>查看解析</span>
                 <span class="official">官方</span>
             </div>
                <p>当前计算机的应用领域极为广泛，
                    但其应用最早的当前计 算机的应用领域极
                    为广泛，但其应用最早的领域前计前计 的
                    领域是机的应用领域极
                    当前计算机的应用领域极为广泛，
                    但其应用最早的当前计 算机的应用领域极
                    为广泛
                </p>
                <div class="error-rate">
                    <div class="top">
                      <span class="value">考生错误率23.7%</span>
                      <span class="difficult-value">难度值 <i></i><i></i><i></i></span>
                    </div>
                      <div>
                          我共做过<span class="rightnunmber">2</span>次，做错<span class="wrongnumber">2</span>次
                      </div>
                </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
   .view-resolution{
       width: px2rem(670px);
       margin: 0 auto;
       font-size: px2rem(28px);
       padding-top: px2rem(40px);
   }
   .view span{
       float: left;
       color: #2185ff;
       margin-right: px2rem(10px);
   }
   .view .official{
       display: block;
       width: px2rem(70px);
       height: px2rem(32px);
       border-radius: px2rem(15px);
       border-bottom-left-radius:0;
       background: #d3f5e0;
       color: #13b653;
       font-size: px2rem(22px); 
       text-align: center;
       line-height: px2rem(32px);
       margin-top: px2rem(6px);
   }
   .view-resolution p{
       float: left;
       text-align: justify;
       margin-top: px2rem(40px);
       margin-bottom: px2rem(50px);
   }
   .error-rate{
       width: px2rem(670px);
       float: left;
       line-height: px2rem(24px);
   }
   .error-rate .value{
       color: #acadb0;
   }
   i{
       display: block;
       width: px2rem(25px);
       height: px2rem(25px);
       background: url(../../../../assets/svg/star-yellow.svg);
       float: right;
   }
   i:last-child{
       margin-left: px2rem(10px);
   }
   .difficult-value{
       color: #feba50;
       font-size: px2rem(22px);
       float: right;
   }
   .rightnunmber{
       color: rgb(33, 133, 255);
   }
   .wrongnumber{
       color: rgb(250, 91, 74);
   }
   .top{
       margin-bottom: px2rem(30px);
   }
</style>
