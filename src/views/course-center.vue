<template>
    <div>
        <course-player class="player"></course-player>
        <work-tab></work-tab>
    </div>
</template>

<script>
import CoursePlayer from '../components/course-center/work/course-player'
import WorkTab from '../components/course-center/work-tab'
export default {
    components:{
        WorkTab,
        CoursePlayer
    }
}
</script>

<style lang="scss" scoped>
    @function px2rem($px){
        $rem:37.5px;
        @return ($px / $rem) + rem; 
    }
</style>


