<template>
    <div>
        <!-- 选中要显示的面板 -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="index">
                <!-- 应用首页面板组件 -->
                    <indexitem></indexitem>
            </mt-tab-container-item>
            <mt-tab-container-item id="kind">
                    分类
            </mt-tab-container-item>
            <mt-tab-container-item id="shop">
                    购物
            </mt-tab-container-item>
            <mt-tab-container-item id="me">
                    我的
            </mt-tab-container-item>
        </mt-tab-container>
        <!-- 底部导航栏 -->
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="index" @click.native="changeState(0)">
                <tabbaricon
                :normalImage="require('../assets/home.png')"
                :selectedImage="require('../assets/home_active.png')"
                :focused="currentIndex[0].isSelect"></tabbaricon>
                首页
            </mt-tab-item>
            <mt-tab-item id="kind" @click.native="changeState(1)">
                <tabbaricon
                :normalImage="require('../assets/kind.png')"
                :selectedImage="require('../assets/kind_active.png')"
                :focused="currentIndex[1].isSelect"></tabbaricon>
                分类
            </mt-tab-item>
            <mt-tab-item id="shop">
                <img slot="icon" src="@/assets/shop.png">
                购物
            </mt-tab-item>
            <mt-tab-item id="me" @click.native="changeState(2)">
                 <tabbaricon
                :normalImage="require('../assets/user.png')"
                :selectedImage="require('../assets/user_active.png')"
                :focused="currentIndex[2].isSelect"></tabbaricon>
                我的
            </mt-tab-item>
</mt-tabbar>
    </div>
</template>
<script>
// 引入子组件
import IndexItem from "../views/index/IndexItem"
// 引入首页面板组件
import TabBarIcon from "./TabBarIcon"
    export default{
        data(){
            return{
                selected:"index",
                // 保存焦点后的状态
                currentIndex:[
                    {isSelect:true},
                    {isSelect:false},
                    {isSelect:false}
                ]
            }
        },
        methods:{
            // 将对当前参数的下标，对应的数组值修改为true,其他为false
            changeState(n){
                for(var i=0;i<this.currentIndex.length;i++){
                    // 判断如果循环下标与n相等，相等显示对应的图片，其他都不显示
                    if(n==i){
                        this.currentIndex[i].isSelect=true;
                    }else{
                        this.currentIndex[i].isSelect=false;
                    }
                }
            }
        },
        // 注册
        components:{
            "tabbaricon":TabBarIcon,
            "indexitem":IndexItem
        }
    }
</script>
<style scoped>
/* 修改选中的文字及背景样式 */
.mint-tabbar{
background-color: #fff;
}
.mint-tabbar > .mint-tab-item.is-selected{
    background-color: transparent;
    color: #ec563b;
}
</style>
