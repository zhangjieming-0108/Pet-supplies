<template>
<!-- 详情页 -->
    <div>
        <div class="register-head">
            <span class="small" @click="go">＜</span>
            <span>商品</span>
        </div>
       <mt-swipe :auto="500000" class="product">
            <mt-swipe-item><img class="img" src="../../assets/product/hot-2.png" alt="图片以损坏"></mt-swipe-item>
            <mt-swipe-item><img class="img" src="../../assets/product/hot-2.png" alt="图片以损坏"></mt-swipe-item>
            <mt-swipe-item><img class="img" src="../../assets/product/hot-2.png" alt="图片以损坏"></mt-swipe-item>
       </mt-swipe>
       <p>
          韩国派莫宁水晶猫砂3.8L 猫沙 除臭 除臭猫砂 猫清洁用品 猫咪清洁 6包 
       </p>
       <span>
         ￥60元
       </span>
    </div>
</template>
<script>
    export default{
        data(){
             return{}
        },
        methods:{
            go(){
                this.$router.go(-1);//返回上一层
            }
        }
    }
</script>
<style scoped>
div>.product{
    /*  */
   width: 100%;
    height:300px;
}
/* 顶部头 */
    .register-head{
    width: 100%;
    background-color: #FFF;
    position: relative;
    overflow: hidden;
    padding: 5px 0;
    z-index: 9;
    border-bottom: 1px solid #e2e2e2;
    }
    .register-head>.small{
        float: left;
        color: #e2e2e2;
        font-size: 28px;
    }
    .register-head>span:nth-child(2){
        text-align: center;
        line-height: 37px;
        margin-left:-5%;
    }
    /* 轮播图图片 */
   .img{
    width: 100%;
    height:300px;
   }
   .mint-swipe-indicator.is-active{
       background: #FD4500;
   }


</style>