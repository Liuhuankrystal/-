<template>
        <div>
            <Topheader></Topheader>
            <div class="w1100">
                <div class="list-body" v-for="(item,key) in list" :key="item.id">
                    <div class="list-left">
                            <img :src="item.head_url" alt="">
                        <div class="user-name-body">
                            <div class="user-name">
                                {{item.user_name}}
                            </div>
                            <div class="user-spk">
                                <div>
                                    {{item.content}}
                                </div>
                                <span>{{item.create_time}}</span>
                            </div>
                        </div>
                    </div>

                    <div class="list-right">
                        <div v-if="item.is_huifu == 1" class="audit-body">
                            <div @click="toHuifu(key)" class="audit-yes">回复</div>
                        </div>
                        <div class="yhui" v-else>
                            已回复
                        </div>

                    </div>

                </div>
            </div>
            <div style="margin-top: 40px;"
                 class="loading"
                 v-loading="loading"
                 element-loading-text="拼命加载中"
                 element-loading-spinner="el-icon-loading"
                 element-loading-background="rgba(246, 246, 246, 0.8)"
            ></div>
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
                loading: false,
                loadingType:0,//0=可以加载 1=加载中 2=已加载完毕
                page:1,
                list:[]
            };
        },
        created() {
            this.getList();//获取列表
            window.addEventListener("scroll", this.onScroll);
        },
        //方法定义
        methods: {
            toHuifu(key){
                this.$router.push({
                    path:'/huifu',
                    query:{
                        id:this.list[key].id
                    }
                })
            },
            //获取列表
            getList(){
                let _this = this;
                _this.page=1;
                let data={
                    page:_this.page,
                    page_num:_this.common.pageNum()
                };
                _this.common.request('api/dynamicLeave',data,function (res) {
                    if(res.status == 200){
                        _this.list = res.data.list;
                        console.log(res);
                    }
                })
            },
            //加载跟多
            onScroll() {
                //可滚动容器的高度
                let innerHeight = document.querySelector("#app").clientHeight;
                //屏幕尺寸高度
                let outerHeight = document.documentElement.clientHeight;
                //可滚动容器超出当前窗口显示范围的高度
                let scrollTop = document.documentElement.scrollTop;
                //scrollTop在页面为滚动时为0，开始滚动后，慢慢增加，滚动到页面底部时，出现innerHeight < (outerHeight + scrollTop)的情况，严格来讲，是接近底部。
                if (innerHeight <= outerHeight + scrollTop) {
                    let _this=this;
                    if (_this.loadingType != 0) {
                        return;
                    }
                    _this.loadingType = 1;
                    _this.loading=true;
                    _this.page++;
                    let list=[];
                    let data={
                        page:_this.page,
                        page_num:_this.common.pageNum()
                    };
                    _this.common.request('api/dynamicLeave',data,function (res) {
                        if(res.status == 200){
                            list=res.data.list;//请求数据
                            _this.loading=false;
                            if (list.length <=0) {
                                _this.loadingType = 2;
                                return;
                            }
                            _this.list = _this.list.concat(list);
                            _this.loadingType = 0;
                        }
                    });

                }
            }

        }
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
    .audit-yes{
        width: 58px;
        height: 28px;
        border-radius: 6px;
        color: #FFFFFF;
        text-align: center;
        line-height: 28px;
        cursor: pointer;
    }
    .audit-yes{
        background:rgba(221,44,190,1);    }
    .audit-yes:hover{
        background:rgba(221,44,190,0.7);    }

    .yhui{
        color: #71909E;
    }

</style>