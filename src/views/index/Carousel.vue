<template>
<!-- 轮播组件 -->
    <mt-swipe :auto="3000"  class="carousel">
        <mt-swipe-item ><img class="img" src="../../assets/carousel-1.png" alt="图片以损坏"></mt-swipe-item>
        <mt-swipe-item><img class="img" src="../../assets/carousel-2.png" alt="图片以损坏"></mt-swipe-item>
        <mt-swipe-item ><img class="img" src="../../assets/carousel-3.png" alt="图片以损坏"></mt-swipe-item>
    </mt-swipe>
</template>
<script>
    export default{
        data(){
            return{
                
            }
        }
    }
</script>
<style scoped>
/* 轮播图的总体样式 */
    .carousel{
        width: 100%;
        height: 170px;
    }
    .mint-swipe-indicator.is-active{
      background:red;
    }
    /* 图片的样式 */
    .img{
        width: 100%;
        height: 100%;
    } 
</style>
