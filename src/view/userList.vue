<template>
    <div>
        <Topheader :keyword="keyword"></Topheader>
        <div>
            搜索
        </div>
    </div>
</template>

<script>
    import Topheader from "../components/header"; //上传图片
    export default {
        name: "userList",
        components:{
            Topheader
        },
        data() {
            return {
                keyword: 'sbv'
            };
        },
        created() {
            this.keyword=this.$route.query.keyword;//
        },
        //方法定义
        methods: {}
    }
</script>

<style scoped>

</style>