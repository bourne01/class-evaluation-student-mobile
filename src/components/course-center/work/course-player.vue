<template>
    <div>
        <d-player :options="options"
            @play="play"
            ref="player"
            class="player">
        </d-player>
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
            isFavorite:false,
        }
    },
    methods: {
      play() {
        console.log('play callback')
      }
    },
    mounted(){
        this.player = this.$refs.player.dp
    } 
}
</script>

