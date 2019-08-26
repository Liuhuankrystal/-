<template>
        <div>
            <Topheader></Topheader>
            <div class="w1100">
                <div class="list-body" v-for="item in 8" :key="item">
                    <div class="list-left">
                            <img src="../../static/img/sl.jpg" alt="">
                        <div class="user-name-body">
                            <div class="user-name">
                                Username
                            </div>
                            <div class="user-spk">
                                <div v-if="item == 4" class="user-spk2">
                                    不能成为连接者，很抱歉！
                                </div>

                                <div v-else>
                                    申请link成为连接者
                                </div>
                                <span>11.28 at 08:26PM</span>
                            </div>
                        </div>
                    </div>

                    <div class="list-right">
                        <div v-if="item == 1" class="audit-body">
                            <div class="audit-yes">同意</div>
                            <div class="audit-no">拒绝</div>
                        </div>

                        <div v-else-if="item == 2">
                            <img src="../../static/img/sl.jpg" alt="">
                        </div>

                        <div class="dynamic-content" v-else-if="item == 3">
                            记者和大使的对话完美呈现了，“乌合之众”和“精英之师”之间的
                            看事物观点和角度的差异。既然都有错，那就都要认！就像家里…
                        </div>

                    </div>

                </div>
            </div>
        </div>
</template>

<script>
    import Topheader from "../components/header"; //上传图片

    export default {
        components:{
            Topheader
        },
        name: "interact",
        data() {
            return {
                '':''
            };
        },
        created() {

        },
        //方法定义
        methods: {}
    }
</script>

<style scoped lang='less'  rel="stylesheet/less">
    @import "../assets/css/index.less";
    .list-body{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #D6D6D6;
        padding: 10px;
    }
    .list-left{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        img{
            width: 54px;
            height: 54px;
            border-radius: 50%;
            margin-right: 10px;
        }
        .user-name{
            font-weight: 600;
            cursor: pointer;
        }
        .user-name:hover{
            text-decoration: underline;
            color: #08486D;
        }
        .user-spk{
            font-size: 14px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        span{
            font-size: 14px;
            color: #7F7F7F;
            margin-left: 10px;
        }
    }
    .audit-body{
        display: flex;
        justify-content: space-between;
    }
    .audit-yes,.audit-no{
        width: 58px;
        height: 28px;
        border-radius: 6px;
        color: #FFFFFF;
        text-align: center;
        line-height: 28px;
        cursor: pointer;
    }
    .audit-yes{
        background:rgba(132,199,44,1);
    }
    .audit-yes:hover{
        background:rgba(132,199,44,0.7);
    }
    .audit-no{
        background:rgba(243,52,97,1);
        margin-left: 30px;
    }
    .audit-no:hover{
        background:rgba(243,52,97,0.7);
    }

    .list-right{
        img{
            width: 88px;
            height: 88px;
        }
    }
    .dynamic-content{
        max-width: 400px;
        font-size: 14px;
        color: #7F7F7F;
    }

</style>