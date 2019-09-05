<template>
    <div>
        <Topheader :keyword="keyword"></Topheader>
        <div class="w1100">
            <div class="list-body" v-for="(vo,key) in list" :key="key">
                <div class="time-body">{{vo.day}}</div>

                <div class="list2-body" v-for="(v,k) in vo.list" :key="v.id">
                    <img :src="v.img_url" alt="">
                    <div class="list-info">
                        <div @click="toVideo(v.video_url,v.debut_id)" class="list-title">{{v.title}}</div>
                        <div class="list-count">
                            <span>{{v.create_time}}</span>
                            <span>{{v.click_num}} from {{v.user_name}} people play</span>
                        </div>
                        <div class="list-tage">
                            <span v-for="(v0,k0) in v.label" :key="k0">#{{v0}}</span>
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
        name: "palyList",
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
            //请求记录
            getList(){
                let _this=this;
                _this.page=1;
                let data={
                    page:_this.page,
                    page_num:_this.common.pageNum()
                };
                _this.common.request('api/debut/playList',data,function (res) {
                    if(res.status == 200){
                        _this.list=res.data.list;
                    }
                })
            },
            toVideo(url,id){
                this.clickDebut(id);
              window.open(url);
            },
            clickDebut(id){
              let _this=this;
              _this.common.request('api/debut/onClick',{id:id},function (res) {
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
                    _this.common.request('api/debut/playList',data,function (res) {
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
    margin-top: 18px;
}

    .list2-body{
        display: flex;
        justify-content: flex-start;
        margin-top: 18px;
        img{
            width:182px;
            height:112px;
            background:rgba(165,165,165,1);
            border-radius:8px;
        }
        .list-info{
            margin-left: 18px;
            .list-title{
                font-size:18px;
                font-family:Microsoft YaHei;
                font-weight:bold;
                color:rgba(28,28,28,1);
                line-height:36px;
                cursor: pointer;
            }
            .list-title:hover{
                text-decoration: underline;
            }
            .list-count{
                font-size:16px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(77,77,77,1);
                line-height:30px;
            }
            .list-tage{
                font-size:14px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(29,29,29,1);
                line-height:30px;
                span{
                    margin-left: 18px;
                }
                span:first-child{
                    margin-left: 0;
                }
            }
        }
    }
</style>