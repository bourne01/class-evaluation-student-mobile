<template>
    <div class="search-hot">
        <p>热门搜索</p>
        <ul id="list">
            <li  v-for="idx in 5" :key="idx">
                <span class="number" 
                    v-if="idx===1"
                    :class="{top1:idx===1}"
                    :style="{color:actColor}">{{idx}}</span>
                <span class="number" 
                    v-if="idx===2"
                    :class="{top2:idx===2}">{{idx}}</span>
                <span class="number" 
                    v-if="idx===3"
                    :class="{top3:idx===3}">{{idx}}</span>
                <span class="number" 
                    v-if="idx>3">{{idx}}</span>                
                <span>张老师 计算机课程</span>
                <span>36446</span>
            </li>
        </ul>
    </div>
</template>
<script>
/* window.onload = function(){
    var oUl = document.getElementById('list');
        var aspan = oUl.getElementsByTagName('span');
        aspan[0].style.background = '#FF2741';
        aspan[0].style.color = 'white';
        aspan[3].style.background = '#FFC938';
        aspan[3].style.color = 'white';
        aspan[6].style.background = '#72DA9F';
        aspan[6].style.color = 'white';
} */
export default {
    data(){
        return{
            actColor:'red'
        }
    }
    
}
</script>
<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
    .search-hot{
        height: px2rem(956px);
        padding: px2rem(30px) px2rem(41px);
        font-size: px2rem(28px);
    }
    p{
        font-size: px2rem(24px);
    }
    li{
        list-style: none;
        margin-top: px2rem(50px);
    }
    .top1{
        background-color:#FF2741!important;
        color:#fff!important;
    }
    .top2{
        background-color:#FFC938!important;
        color:#fff!important;
    }
    .top3{
        background-color:#72DA9F!important;
        color:#fff!important;
    }
    .number{
        display: block;
         width: px2rem(32px);
         height: px2rem(32px);
         border-radius: px2rem(8px);
         background: #F0F0F0;
         float: left;
         font-size: px2rem(24px);
         text-align: center;
         color: #979797;
         margin-right: px2rem(38px);
    }
    span:last-child{
        float: right;
    }

</style>