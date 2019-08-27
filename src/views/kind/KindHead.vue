<template>
    <div>
        <div @click="go">放回</div>
    </div>
</template>
<script>
    export default{
        data(){
            return{}
        },
        methods:{
            go(){
                this.$router.go(-1)
            }
        }
    }
</script>
<style scoped>

</style>
