<template>
    <div v-transfer-dom class="course-intro">
        <popup v-model="isShow" position="bottom" :show-mask="true">
            <div class="chapters">
                <div class="course-catalog">
                        <h4 class="catalog">课程简介</h4>
                        <img :src="require('../../assets/schedule/close.png')" alt="" class="close" id="close" @click="isShow=false">
                </div>
                <div class="teacher">
                    <p class="teach">
                        授课老师
                    </p>
                        <div class="pic" v-for="idx in 3" :key="idx">
                            <img :src="require('../../assets/course/female-avatar.png')" alt="" class="female">
                            <p>朱老师</p>
                        </div>       
                </div>
                <div class="text">
                    <p v-for="idx in 3" :key="idx"> 无论是电商详情页、摄影作品还是广告海报，它们都离不开人像精修。  
                    设计师和修图师最容易遇到两个难题，一个是虽然技术很熟练
                    无论是电商详情页、摄影作品还是广告海报，它们都离不开人像精修。  
                    设计师和修图师最容易遇到两个难题，一个是虽然技术很熟练</p>
                </div>
            </div>
        </popup>
    </div>
</template>
<script>
import {TransferDom, Popup} from 'vux'
export default {
    directives: {
        TransferDom
    },
    components:{
        Popup
    },
    data(){
        return{
            isShow:false,
        }
    },
    methods:{

    },
    mounted(){
        this.$root.bus.$on('course-introduction',()=>{
            this.isShow = true;
        })
    }
}
</script>

<style lang="scss" scoped>
     @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }    
    .vux-popup-dialog{
        background-color:rgba(0,0,0, 0);
    }
    .course-intro{
        background-color:rgba(0,0,0, 0)
    }
    .chapters{
        width: px2rem(750px);
        height: px2rem(900px);
        background-color: #f3f3f6;
        margin-top: px2rem(500px);
        overflow-y: scroll;
        font-size: px2rem(24px);
    }
    .course-catalog{
        height: px2rem(98px);
        margin: 0 auto;
        line-height: px2rem(40px);
        font-size: px2rem(32px);
        margin-bottom: px2rem(9px);
        background: white;
        position: relative;
        color: #171a20;
        line-height: px2rem(98px);
        padding-left: px2rem(40px);
    }
    .close{
        width: px2rem(40px);
        height: px2rem(40px);
        display: block;
        position: absolute;
        top: px2rem(30px);
        right: px2rem(40px);
    }
    .teacher{
        height: px2rem(228px);
        background: white;
        padding-left: px2rem(40px);
        color: rgb(88, 90, 96);
        margin-bottom: px2rem(9px);
    }
    .female{
        width: px2rem(88px);
        height: px2rem(88px);
    }
    .pic{
        width: px2rem(98px);
        height: px2rem(122px);
        text-align: center;
        line-height: px2rem(32px);
        float: left;
        margin-right: px2rem(20px);
    }
    .teach{
        line-height: px2rem(28px);
        margin-bottom: px2rem(20px);
        padding-top: px2rem(30px);
        padding-left: px2rem(10px);
    }
    .text{
        background: white;
        padding: px2rem(40px);
        text-align: justify;
    }
    .text p{
        margin-bottom: px2rem(20px);
    }
</style>

