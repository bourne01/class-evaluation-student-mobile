<template>
    <div>
        <div class="examina">
            <h6>1、下列词语中没有错别字的一项是</h6>
        </div>
        <div class="box">
            <div class="option">
                <p>A、嘹亮      笙萧        肆无忌惮     坦荡如砥  
                  <br/>  B、孤僻      辍泣       流连忘返     首当其冲</p>
            </div>
            <div class="time">
                <img src="../../assets/error-collection/time.png"/>
                <p>2018-09-21</p>
            </div>
            <div class="knowledge-point">
                <p>知识点</p>
            </div>
            <div class="delete">
                <p>移除错题</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .examina{
        width: px2rem(710px);
        height: px2rem(78px);
        background: white;
        margin-left: px2rem(20px);
        margin-top: px2rem(20px);
        margin-bottom: px2rem(2px);
        border-radius: px2rem(8px) px2rem(8px) 0 0;
                        
    }
    .examina h6{
        font-size: px2rem(24px);
        padding: px2rem(30px) px2rem(30px) px2rem(26px) px2rem(30px);
        font-family: 'PingFang-SC-Medium';
    }
    .box{
        width: px2rem(710px);
        height: px2rem(190px);
        background: white;
        margin-left: px2rem(20px);
        border-radius: 0 0 px2rem(8px) px2rem(8px);
    }
    .option{
        padding-top: px2rem(30px);
        margin-left: px2rem(30px);
        margin-bottom: px2rem(36px);
    }
    .option p{
        font-size: px2rem(24px);
        font-family: 'PingFang SC';
    }
    .time{
        width: px2rem(198px);
        height: px2rem(38px);
        background: #f3f3f6;
        border-radius: px2rem(18px);
        margin-left: px2rem(30px);
        float: left;
    }
    .time img{
        width: px2rem(24px);
        height: px2rem(24px);
        margin-top: px2rem(6px);
        margin-left: px2rem(20px);
        margin-right: px2rem(10px);
        float: left;
    }
    .time p{
        color: #ACADB0;
        margin-top: px2rem(10px);
        font-size: px2rem(22px);
        font-family: 'PingFangSCRegular';
        float: left;
    }
    .knowledge-point{
        width: px2rem(94px);
        height: px2rem(38px);
        background: #D3F5E0;
        border-radius: px2rem(18px);
        float: left;
        margin-left: px2rem(220px);
        margin-right: px2rem(20px);
    }
    .knowledge-point p{
        font-family: 'PingFangSCRegular';
        font-size: px2rem(22px);
        color: #13B653;
        margin-top: px2rem(8px);
        margin-left: px2rem(16px); 
    }
    .delete{
        float: left;
        width: px2rem(118px);
        height: px2rem(38px);
        background: #E4EBFF;
        border-radius: px2rem(18px);
    }
    .delete p{
        font-family: 'PingFangSCRegular';
        color: #4B78FF;
        font-size: px2rem(22px);
        margin-top: px2rem(8px);
        margin-left: px2rem(16px);
    }
</style>
