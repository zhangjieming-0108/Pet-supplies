<template>
<!-- 用户面板组件 -->
    <div class="user">
        <div class="user-head">
            <div><img src="../../assets/user/user.png" alt="图片以损坏"></div>
            <span>会员登录</span>
        </div>
        <div>
            <mt-field  placeholder="请输入用户名" v-model="username" class="user-item" :state="uname"></mt-field>
            <mt-field  placeholder="请输入密码" type="password" v-model="password" class="user-item" :state="upwd"></mt-field> 
        </div>
        <div class="user-content">
            <router-link to="/Register" class="reg">注册</router-link>
            <span>忘记密码</span>
        </div>
        <mt-button size="large">登录</mt-button>  
    </div>
</template>
<script>
    export default{
        data(){
            return{
                uname:"",
                upwd:"",
                username:"",
                password:""
            }
        }
    }
</script>
<style>
/* 总体样式 */
    .user{
         padding: 7px 10px;
    }
/* 用户的头像部分 */
    .user-head{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }
    /* 用户的图片 */
    .user-head>div{
        border-radius: 50%;
        width: 60px;
        height: 60px;
        overflow: hidden;
        margin: 20px auto;
    }
    .user-head>div>img{
        width: 60px;
        height: 60px;
    }
    /* 文字 */
    .user-head>span{
        color: #333;
        font-size: 14px;
    }
    /* 输入文本框 */
    .user-item{
    width: 100%;
    border: 0;
    height: 50px;
    line-height: 35px;
    }
    /* 修改输入框的样式 */
    .mint-field .mint-cell-value>.mint-field-core{
     font-size: 14px;
     color: #333;
     background: #fff;
    }
    .mint-cell:last-child>.mint-cell-wrapper{
        padding: 0 ;
    }
    .mint-cell:first-child .mint-cell-wrapper{
        padding: 0 ;
    }
    /* 注册和忘记密码的样式 */
    .user-content{
        display: flex;
        justify-content: space-between;
        color: #888;
        font-size: 14px;
    }
    .user-content>.reg{
         color: #888;
        font-size: 14px;
        text-decoration: none;
    }
    .mint-button{
        background-color: #FD4500 !important;
    }
    .mint-button-text{
         color:#fff;
         z-index: 100;
     } 
</style>
