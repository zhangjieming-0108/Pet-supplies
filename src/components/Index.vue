<template>
    <div>
        <!-- 选中要显示的面板 -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="index">
                    首页
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
            <mt-tab-item id="index">
                <img slot="icon" src="@/assets/home.png">
                首页
            </mt-tab-item>
            <mt-tab-item id="kind">
                <img slot="icon" src="@/assets/kind.png">
                分类
            </mt-tab-item>
            <mt-tab-item id="shop">
                <img slot="icon" src="@/assets/shop.png">
                购物
            </mt-tab-item>
            <mt-tab-item id="me">
                <img slot="icon" src="@/assets/user.png">
                我的
            </mt-tab-item>
</mt-tabbar>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                selected:"index"
            }
        }
    }
</script>
