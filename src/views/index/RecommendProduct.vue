<template>
<!-- 新品推荐组件 -->
    <div class="RecommendProduct">
        <div class="Recommend">新品推荐</div>
        <div class="Recommend-item">
            <div class="item-content">
                <img src="../../assets/recommend/recommend-1.png" alt="图片已损坏">
                <span>拉斯加幼犬</span>
                <span>￥85.9</span>
            </div>
            <div class="item-content">
                <img src="../../assets/recommend/recommend-2.png" alt="图片已损坏">
                <span>拉斯加幼犬</span>
                <span>￥85.9</span>
            </div>
            <div class="item-content">
                <img src="../../assets/recommend/recommend-3.png" alt="图片已损坏">
                <span>拉斯加幼犬</span>
                <span>￥85.9</span>
            </div>
            <div class="item-content">
                <img src="../../assets/recommend/recommend-4.png" alt="图片已损坏">
                <span>拉斯加幼犬</span>
                <span>￥85.9</span>
            </div>
            <div class="item-content">
                <img src="../../assets/recommend/recommend-5.png" alt="图片已损坏">
                <span>拉斯加幼犬</span>
                <span>￥85.9</span>
            </div>
            <div class="item-content">
                <img src="../../assets/recommend/recommend-6.png" alt="图片已损坏">
                <span>拉斯加幼犬</span>
                <span>￥85.9</span>
            </div>
            <div class="item-content">
                <img src="../../assets/recommend/recommend-7.png" alt="图片已损坏">
                <span>拉斯加幼犬</span>
                <span>￥85.9</span>
            </div>
            <div class="item-content">
                <img src="../../assets/recommend/recommend-8.png" alt="图片已损坏">
                <span>拉斯加幼犬</span>
                <span>￥85.9</span>
            </div>
            <div class="item-content">
                <img src="../../assets/recommend/recommend-9.png" alt="图片已损坏">
                <span>拉斯加幼犬</span>
                <span>￥85.9</span>
            </div>
        </div>
        <div class="more">查看更多</div>
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
/* 总体布局 */
    .RecommendProduct{
        width:100%;
        background: #f5f5f5;
        display: flex;
        flex-direction: column;
        justify-content:space-around;
        padding: 10px 0;
    }
    /* 热卖标题 */
    .RecommendProduct>.Recommend{
        width:80px;
        height:26px;
        border-bottom: 4px solid rgb(236, 86, 59);
        margin:10px auto;
    }
    /* 热卖商品内容 */
    .RecommendProduct>.Recommend-item{
        width: 100%;
        display: flex;
        justify-content:space-around;
        flex-wrap: wrap;
    }
    .Recommend-item>.item-content{
        width: 104px;
        height: 144px;
        padding: 3px;
        display: flex;
        flex-direction: column;
        justify-content:space-around;
        background: #fff;
        margin: 5px 0;
    }
    /* 商品图片 */
    .item-content>img{
        width: 84px;
        height:84px ;
    }
    /* 商品文字 */
    .item-content>span:nth-child(2){
        font:10px Arial;
    }
    /* 商品价格 */
    .item-content>span:nth-child(3){
        color: red;
        font-size: 10px;
    }
    .RecommendProduct>.more{
        color:  rgb(236, 86, 59);
        background: #fff;
        width: 112px;
        height: 36px;
        margin: 10px auto;
        line-height: 36px;
    }
</style>
