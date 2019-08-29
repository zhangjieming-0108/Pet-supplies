<template>
<!-- 分类组件 -->
    <div>
       <mt-navbar v-model="selected">
            <mt-tab-item id="dog">狗狗</mt-tab-item>
            <mt-tab-item id="cat">猫猫</mt-tab-item>
            <mt-tab-item id="smallPamper">小宠</mt-tab-item>
            <mt-tab-item id="waterClan">水族</mt-tab-item>
            <mt-tab-item id="brand">品牌馆</mt-tab-item>
      </mt-navbar>
        <!-- 要显示的分类子组件 -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="dog">
                <mt-cell v-for="(n,i) of ns" :key="i" :title="'内容 ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="cat">
                <mt-cell v-for="(n,i) of ns1" :key="i" :title="'测试 ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="smallPamper">
                <mt-cell v-for="(n,i) of ns2" :key="i" :title="'选项 ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="waterClan">
                <mt-cell v-for="(n,i) of ns2" :key="i" :title="'选项 ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="brand">
                <mt-cell v-for="(n,i) of ns2" :key="i" :title="'选项 ' + n" />
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                selected:"dog",
                ns:[1,2,3,4,5,6,7,8,9],
                ns1:[1,2,3,4,5,6,7,8,9],
                ns2:[1,2,3,4,5,6,7,8,9]
            }
        }
    }
</script>
<style scoped>
.mint-navbar .mint-tab-item.is-selected{
    color: #ec563b;
}

</style>
