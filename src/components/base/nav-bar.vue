<template>
    <div class="nav-bar">
        <ul>
            <li 
                v-for="(item,idx) in navNames" 
                :key="idx"
                @click="onClick(idx)">
                <img :src="actIcons[idx]" alt="" v-if="actIndex===idx">
                <img :src="defaultIcons[idx]" v-else>
                <p>{{navNames[idx]}}</p>
            </li>  
        </ul>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            actIndex:0,//当前导航的位置
            navNames:['首页','错题集','积分排行','我的'],
            defaultIcons:[//默认导航图标
                require("../../assets/home/home.png"),
                require("../../assets/home/error-collection.png"),
                require("../../assets/home/rank.png"),
                require("../../assets/home/mine.png"),
            ],
            actIcons:[//激活是图标
                require("../../assets/home/home-active.png"),
                require("../../assets/home/error-collection-active.png"),
                require("../../assets/home/rank-active.png"),
                require("../../assets/home/mine-active.png"),
            ],
        }
    },
    methods:{
        /**
         * @function 监听导航条点击事件，跳转到相应页面
         * @param {当前激活的按钮序号} index
         */
        onClick(index){
            this.actIndex = index;
            switch(index){
                case 0:
                    this.$router.push("/home");//<a href=""></a>
                    break;
                case 1:
                    this.$router.push("/my-errors");
                    break;
                case 2:
                    this.$router.push("/credit-rank");
                    break;
                case 3:
                    this.$router.push("/me");
                    break;
                default:
            }
        },
    },
}
</script>


<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .nav-bar {
        position: fixed;
        bottom: 0;
        left: 0;
        background-color:#fff;
        border-top: 1px solid #f1f1f1;
        z-index: 10;
        width:100%;
    }
    li{
        list-style: none;
        text-align: center;
        height: px2rem(109px);
        padding-top: px2rem(20px);
        width:px2rem(160px);
        color: #9b9ea3;
        font-size: px2rem(24px);
        padding-bottom: px2rem(10px);
        box-sizing: border-box;
        line-height: normal;
    }
    img{
        width: px2rem(50px);
        height: px2rem(50px);
    }
    .nav-bar>ul{
        display: flex;
        /* align-items: center; */
        justify-content: space-between;
    }
</style>