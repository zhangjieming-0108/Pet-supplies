<template>
<!-- 有商品购物车选项 -->
    <div class="shopcart">
         <div class="shopcart-head">
           <a href="javascript:;" class="return_url" @click="go"><img src="../../assets/return.png"></a>
            购物车
        </div>
        <!-- 全选 -->
        <div class="shopcart-content">
            <input type="checkbox" class="select" @change="selectAll" />
            <span>全选</span>
        </div>
        <!-- 内容 -->
        <div class="shop-product">
            <input type="checkbox" class="select">
            <img src="../../assets/product/hot-2.png" alt="">
            <div class="shop-product-con">
                <p>维斯康 宠物羊奶粉 猫奶粉 狗奶粉 宠物狗狗保健品 幼犬用羊奶粉300g</p>
                <p>
                    <span>￥20</span>
                    <span>小计(元):￥50</span>
                </p>
                <div class="sum">
                    <div class="btn">
                         <span @click="reduce">－</span>
                         <input type="text" v-model="vulue">
                         <span @click="add">＋</span>
                     </div>
                    <mt-button type="default">删除</mt-button>
                </div>
            </div>
        </div>
        <!-- 底部结算 -->
        <div class="sum-bottom">
            <input type="checkbox" class="select">
            <span>合计:￥1000000</span>
            <mt-button type="default">删除选中商品</mt-button>
            <mt-button type="default">结算(5)</mt-button>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
             list:[],//购物车列表//商品的数量
             vulue:1
        }
    },
    created(){
       
    },
     methods:{
         selectAll(e){
            //console.log(123);
            //全选按钮处理函数
            //1:获取全选按钮状态
            console.log(e)
            var cb = e.target.checked;
            //console.log(cb);
            //2:创建循环遍历购物车数组
            for(var item of this.list){
            //3:将全选状态赋值购物车商品选中状态
            //item.cb 商品状态=cb全选按钮状态
            item.cb = cb;
            }
        },
        go(){
         this.$router.go(-1);//返回上一层
        },
        // 点击减按钮时商品数量自减
        reduce(){
            if(this.vulue==1){
                this.$messagebox("信息","数量不能小于或大于1000");
            }
            if(this.vulue>1){
                this.vulue--;
            }
        },
        // 点击加按钮时增加商品数量
        add(){
            if(this.vulue==999){
                this.$messagebox("信息","数量不能小于或大于1000");
            }
            if(this.vulue<1000){
                this.vulue++;
            }
        },
    }
}
</script>
<style scoped>
.shopcart{
    font-family: -apple-system-font,"Helvetica Neue",sans-serif;
    width: 100%;
    height: 100%;
    color: #222;
    padding: 32px 0;
}
    /* 购物车头 */
.shopcart-head{
    position: fixed;
    z-index:10;
    text-align: center;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    line-height: 40px;
    max-width: 648px;
    margin: 0 auto;
    border-bottom: 1px solid #C7C7C7;
    background-image: -webkit-linear-gradient(top,#FEFEFE,#F8F8F8);
    width: 100%;
}
.return_url{
    left: 10px;
    display: inline-block;
    line-height: 40px;
    width: 20px;
    z-index: 30;
    position: fixed;
    
}
.return_url>img{
    width:20px;
    height:20px;
    vertical-align: middle;
}
/* 全选 */
.shopcart-content{
    width: 100%;
    height: 47px;
    border-bottom: 2px solid #e8e8e8;
    line-height: 47px;
    display: flex;
    align-items: center;
}
/* 没选中的显示样式 */
.select{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid rgb(201, 203, 206);
    margin:0 10px;
}
 /* 内容 */
 .shop-product{
     width:100%;
    border-bottom: 1px dotted #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
 }
 /* 商品图片 */
 .shop-product>img{
     width: 83px;
     height: 83px;
 }
 .shop-product-con{
     width: 55%;
     display: flex;
     flex-direction: column;
 }
 .shop-product-con>p:first-child{
     width:100%;
    font-size: 16px;
    margin: 0;
    color: #3e3e3e;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
 }
 /* 价格和小计 */
 .shop-product-con>p:nth-child(2){
     display: flex;
     justify-content: space-around;
     width: 100%;
     font-size:13px;
     margin: 0;
     color: #ff0000;
     padding: 5px 0;
 }
 /* 增减按钮 */
 .shop-product-con>.sum{
     width: 100%;
     display: flex;
     justify-content: space-around;
     align-items:center;
    padding: 5px 0;
 }
.btn{
    width: 99px;
    height: 27px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #CCCCCC;
}

.btn>input{
    width: 35px;
    text-align: center;
    font-size: 14px;
    text-shadow: none;
    text-transform: none;
    outline: none;
    border: 0;
    background: #fff;
}

.btn>span{
    text-align: center;
    display:inline-block;
    font-weight: bold;
    width: 27px;
    height: 27px;
}
.btn>span:nth-child(3){
    border-left: 1px solid #CCCCCC;
}
.btn>span:first-child{
    border-right: 1px solid #CCCCCC;
}
/* 底部结算 */
.sum-bottom{
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    left: 0;
}
.sum-bottom>span{
    color: #ff0000;
}
.sum-bottom>.mint-button--normal{
    font-size: 15px !important;
    padding: 0 7px;
}
</style>
