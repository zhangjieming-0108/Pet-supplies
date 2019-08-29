<template>
    <div>
        <!-- 应用头部搜索框组件 -->
       <kindcontent></kindcontent>
    </div>
</template>
<script>
// 引入头部搜索框组件
import KindContent from "./KindContent"
    export default{
        data(){
            return{}
        },
        // 注册
        components:{
            "kindcontent":KindContent
        }
    }
</script>
<style>

</style>
