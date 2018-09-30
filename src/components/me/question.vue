<template>
    <div class="collection">
        <div class="top">1、下列词语中没有错误的一项是（ ）</div>
        <div class="down">
            <ul class="option">
                 <li>A、<span>嘹亮</span><span>笙箫</span><span>肆无忌惮</span><span>坦荡如砥</span></li>
                 <li>B、<span>孤僻</span><span>啜泣</span><span>流连忘返</span><span>首当其冲</span></li>
            </ul>
            <div class="cancel-collection"><span class="start"></span><span class="cancel">取消收藏</span></div>
            <span class="knowledge-point">知识点</span>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .collection{
        width: px2rem(710px);
        height: px2rem(268px);
        margin: px2rem(20px) auto;
        border-radius: px2rem(8px);
        font-size: px2rem(24px);
        background: white;
    }
    .top{
        height: px2rem(78px);
        border-bottom: 1px solid #f3f3f6;
        line-height: px2rem(78px);
        padding-left: px2rem(29px);
        color: #171A20;
    }
    .down{
        height: px2rem(190px);
        padding: px2rem(30px);
    }
    .option{
        color: #585A60;
    }
    li{
        list-style: none;
        line-height: px2rem(44px);
    }
    .option span{
        margin-right: px2rem(35px);
    }
    .cancel-collection{
        width: px2rem(160px);
        height: px2rem(37px);
        border-radius: px2rem(19px);
        background: #FFE8E0;
        color: #FC6835;
        margin-top: px2rem(20px);
        float: left;
        line-height: px2rem(35px);
    }
    .start{
        display: block;
        width: px2rem(28px);
        height: px2rem(28px);
        line-height: px2rem(28px);
        background: url(../../assets/svg/star-orange.svg);
        float: left;
        margin-top: px2rem(4px);
        margin-left: px2rem(14px);
        margin-right:px2rem(4px);
    }
    .knowledge-point{
        float: right;
        /* width: px2rem(94px);
            */
        height: px2rem(37px);
        line-height: px2rem(37px);
        padding:0 px2rem(12px);
        background: #D3F5E0;
        color: #13B653;
        border-radius: px2rem(20px);
        margin-top: px2rem(20px);
        text-align: center;
    }
</style>

