<template>
    <div class="player">
        <d-player :options="options"
            @play="play"
            @pause="pause"
            @ended="pause"
            ref="player"
            class="player">
        </d-player>
        <div class="back" @click="goBack" v-if="!isPlay">
            <img :src="require('../../../assets/svg/back-white.svg')" alt="">
        </div>
    </div>
</template>

<script>
import VueDPlayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'
export default {
    components:{
        'd-player': VueDPlayer,
    },
    data(){
        return {
            options: {
                video: {
                    url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4',
                    pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg'
                },
                autoplay: false,
                theme:'#000',
                contextmenu: [
                    {
                        text: 'GitHub',
                        link: 'https://github.com/MoePlayer/vue-dplayer'
                    }
                ]
            },
            player: null,
            isPlay:false,
        }
    },
    methods: {
        /**@function 回退上一页 */
        goBack(){
            history.go(-1);
        },
        /**@function 监听点击播放按钮事件 */
        play() {
            this.isPlay = true;
        },
        pause(){
            this.isPlay = false;
        }
    },
    mounted(){
        this.player = this.$refs.player.dp;
        this.$root.bus.$on('play',(id) => {            
            this.player.play();//播放
        });
    } 
}
</script>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .player{
        position: relative;
    }
    .back{
        position: absolute;
        top:px2rem(26px);
        left:px2rem(20px);
        border-radius:px2rem(50px);
        background-color:rgba(0, 0, 0, 0.15);
        width:px2rem(60px);
        height:px2rem(60px);
        text-align: center;
        
    }
    .back>img{
        margin-top:px2rem(4px);
        height:px2rem(50px);
        width:px2rem(50px)
    }
</style>


