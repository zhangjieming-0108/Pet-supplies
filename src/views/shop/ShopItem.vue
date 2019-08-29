<template>
<!-- 购物车显示面板组件 -->
    <div class="shop">
        <img src="../../assets/shop/shop.png" alt="图片已损坏">
        <span>空空如也~</span>
        <p>快去买买买给自己一个惊喜吧</p>
    </div>
</template>
<script>
    export default{
        data(){
            return{}
        }
    }
</script>
<style scoped>
.shop{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.shop>img{
    margin-top: 30%;
    width: 106px;
    height: 106px;
}
.shop>span{
    font-size: 16px;
    margin-top: 20px;
    line-height: 22px;
}
.shop>p{
    font-size: 14px;
    color: #c2c2c2;
}
</style>
