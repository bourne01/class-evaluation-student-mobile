<template>
    <div>
        <router-view></router-view>        
        <nav-bar></nav-bar>
    </div>
</template>

<script>
import NavBar from '../components/base/nav-bar'
export default {
    components:{
        NavBar,
    },
    
}
</script>

