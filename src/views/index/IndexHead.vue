<template>
<!-- 首页logon图片及右边的图案的组件 -->
    <div>
        <!-- logon图片 -->
        <img src="../../assets/logo.png" alt="图片已损坏">
        <!-- 右边的图案 -->
        <div class="fixedNavBut">
            <div class="fixedNavBut-item">
                <i class="i-1"></i>
                <i class="i-2"></i>
                <i class="i-3"></i> 
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{

            }
        }
    }
</script>
<style scoped>
/* logon的样式 */
    img{
        width: 100%;
        height: 46px;
    }
    /* 右边图案 */
    .fixedNavBut{
        width: 40px;
        height:40px;
        bottom: 60px; 
         z-index: 10;
        top: 15px;
        right: 9px;
        position:fixed;

    }
    .fixedNavBut>.fixedNavBut-item{
        border-radius: 50%;
        border:1px solid #ec563b;
        width: 30px;
        height:30px;
        position: relative;
        left: 4px;
        top:2px;
        background: #fff;
        
    }
    /* 图案里的每条线 */
    .fixedNavBut-item>i{
        display: block;
        width: 20px;
        height: 2px;
        background-color:#ec563b;
        position: absolute;
        left:5px;
         top:8px;
    }
    .fixedNavBut-item>.i-2{
        top:14px;
    }
    .fixedNavBut-item>.i-3{
        top:20px;
    }
</style>
