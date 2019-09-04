<template>
      <div>
        <!-- 狗狗商品列表组件 -->
        <div class="kind-dog">
            <div class="kind-dog-item" v-for="(elem,i) of list" :key="i" @click="goproduct(elem.pid)">
                  <img :src="'http://127.0.0.1:3000/' + elem.Pimg" alt="图片已损坏">
                  <p>{{elem.pname}}</p>
                  <div class="dog-price">
                      <span>￥{{elem.price}}</span>
                      <mt-button type="danger" size="small">加入购物车</mt-button>
                  </div>
            </div>
            <mt-button @click.native="handleClick" size="large">加载更多</mt-button>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                list:[],//保存请求回来的数据
                pno:0   //页码，(第几页)
            }
        },
        created(){
            // 加载组件时调用
            this.loadmore();
        },
        methods:{ 
            // 跳转到详情页
            goproduct(pid){
                this.$router.push(`/Product/${pid}`);
            },
            handleClick(){
                this.loadmore();
            },
            loadmore(){
                // 发送请求
                var url="kind";
                // 与数据库对应代表的种类
                var fid="1";
                // 当前页码加一
                this.pno++;
                //创建参数对象
                var obj={pno:this.pno,fid:fid};
                this.axios.get(url,{params:obj}).then(res=>{
                    // 获取服务器返回的结果
                    // 将返回的结果
                    // var rows=当前页.concat返回的数据页；
                    // 再将拼接到的数据返回到页面this.list=rows
                    if(!res.data.data[0]){
                         this.$toast('已经到底了');
                    }
                    var rows = this.list.concat(res.data.data);
                    //将结果赋值list 
                    this.list = rows; 

                });

            }

        }
    }
</script>
<style scoped>
/* 页面样式 */
    .kind-dog{
        width: 100%;
        background-color: #f5f5f5;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
       padding: 30px 0;
    }
    /* 每个商品的总体的布局 */
    .kind-dog-item{
        width: 46%;
        height: 270px;
        padding:5px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        margin: 5px 0;
    }
    /* 商品图片 */
    .kind-dog-item>img{
        width: 100%;
        height: 183px;
    }
    /* 商品介绍 */
    .kind-dog-item>p{
        font:10px Arial;
        overflow: hidden;
       -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        display:-webkit-box;
        -webkit-box-orient: vertical;
    }
    /* 价格和购物车按钮 */
    .kind-dog-item>.dog-price{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .dog-price>span{
        color: #ff4542;
    }
</style>
