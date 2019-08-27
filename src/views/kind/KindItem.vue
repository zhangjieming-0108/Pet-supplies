<template>
    <div>
        <!-- 应用头部搜索框组件 -->
       <kindhead></kindhead>
    </div>
</template>
<script>
// 引入头部搜索框组件
import KindHead from "./KindHead"
    export default{
        data(){
            return{}
        },
        // 注册
        components:{
            "kindhead":KindHead
        }
    }
</script>
<style>

</style>
