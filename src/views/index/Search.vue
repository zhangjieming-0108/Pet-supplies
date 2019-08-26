<template>
<!-- 搜索框组件 -->
<div class="search">
    <mt-search
    v-model="value"
    cancel-text="取消"
    placeholder="请输入搜索内容"
    :result.sync="result"
     class="search"
    >
    </mt-search>
</div>
</template>
<script>
    export default{
        data(){
            return{
                value:""
            }
        }
    }
</script>
<style>
    .search{
        width: 100%;
        height: 50px;
    }
    .search>.mint-searchbar{
    background-color:#fff;
    box-sizing: border-box;
    }
    .mint-searchbar>.mint-searchbar-inner{
    background-color:#f5f5f5;
    border-radius: 3px;
    height: 18px
    }
    input{
        background: #f5f5f5;
        /* text-align: center; */
    }
    .mint-searchbar>.mint-searchbar-inner>.mintui-search{
        font-size: 16px;
        /* margin-left: 6px; */

    }
</style>
