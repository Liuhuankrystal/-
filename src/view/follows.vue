<template>
    <div>
        <Topheader :keyword="keyword"></Topheader>
        <div class="w1100" style="margin-bottom: 20px;">

            <div class="list-body" v-for="(vo,key) in list" :key="key">

                <div class="head-body">
                    <div class="head-left" @click="toUser(vo.user_id)">
                        <img :src="vo.head_url" alt="">
                        <div class="head-info">
                            <div class="head-title">{{vo.user_name}}</div>
                            <div class="linker-time">{{vo.create_time}} 建立 Link</div>
                            <div class="head-spk">{{vo.welcome}}</div>
                        </div>
                    </div>

                </div>

                <div class="info-body">
                    <div class="info-list">
                        <img src="../../static/img/logo.png" alt="">
                        <div class="info-spk">Live in {{vo.area_text}} from China.</div>
                    </div>
                    <div class="info-list">
                        <img src="../../static/img/logo.png" alt="">
                        <div class="info-spk">{{vo.jnk}}</div>
                    </div>
                    <div class="info-list">
                        <img src="../../static/img/logo.png" alt="">
                        <div class="info-spk">成就 {{vo.achievement}}</div>
                    </div>
                    <div class="info-list">
                        <img src="../../static/img/logo.png" alt="">
                        <div class="info-spk">{{vo.web_url}}</div>
                    </div>
                    <div class="info-list">
                        <img src="../../static/img/logo.png" alt="">
                        <div class="info-spk">
                            {{vo.keyword}}
                        </div>
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
        name: "linkers",
        components:{
            Topheader
        },
        data() {
            return {
                keyword: '',
                loading: false,
                loadingType:0,//0=可以加载 1=加载中 2=已加载完毕
                page:1,
                list:[]
            };
        },
        created() {
            this.getList();//请求数据
            window.addEventListener("scroll", this.onScroll);
        },
        mounted() {
            document
                .querySelector("body")
                .setAttribute("style", "background-color:#fff");
        },
        //方法定义
        methods: {
            toUser(id){
                this.$router.push({
                    path:'/userInfo',
                    query:{
                        id:id
                    }
                })
            },
            //请求记录
            getList(){
                let _this=this;
                _this.page=1;
                let data={
                    page:_this.page,
                    page_num:_this.common.pageNum()
                };
                _this.common.request('api/userFollow/followMeList',data,function (res) {
                    if(res.status == 200){
                        _this.list=res.data.list;
                        console.log(res)
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
                if (innerHeight < outerHeight + scrollTop) {
                    let _this=this;
                    console.log(_this.loadingType);
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
                    _this.common.request('api/userFollow/followMeList',data,function (res) {
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

<style scoped lang='less' rel="stylesheet/less">
    @import "../assets/css/index.less";

    .list-body{
        margin-top: 34px;
        .head-body{
            display: flex;
            justify-content: space-between;
            border-bottom: #D6D6D6 1px solid;
            padding: 18px 0;
            .head-left{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                img{
                    width:88px;
                    height:88px;
                    background:rgba(199,199,199,1);
                    border-radius:50%;
                }
                .head-info{
                    margin-left: 18px;
                    .head-title{
                        font-size:16px;
                        font-family:Microsoft YaHei;
                        font-weight:600;
                        color:rgba(28,28,28,1);
                        line-height:24px;
                    }
                    .linker-time{
                        font-size:12px;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        color:rgba(127,127,127,1);
                        line-height:24px;
                    }
                    .head-spk{
                        font-size:14px;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        line-height:19px;
                        color: #1D1D1D;
                    }
                }
            }
            .head-right{
                .jc-btn{
                    width:88px;
                    height:32px;
                    background:rgba(223,191,39,1);
                    border-radius:6px;
                    color: white;
                    text-align: center;
                    line-height: 32px;
                    cursor: pointer;
                }
                .jc-btn:hover{
                    background:rgba(223,191,39,0.7);
                }
            }
        }

        .info-body{
            margin-top: 18px;
            .info-list{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin-top: 18px;
                img{
                    width:20px;
                    height:20px;
                }
                .info-spk{
                    font-size:16px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(77,77,77,1);
                    line-height:19px;
                    margin-left: 18px;
                }
            }
        }

    }

</style>