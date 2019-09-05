<template>
        <div>
            <Topheader></Topheader>
            <div class="w1100">
                <div class="list-body" v-for="(item,key) in list" :key="item.id">

                    <div class="list-left">
                            <img :src="item.head_url" alt="">
                        <div class="user-name-body">
                            <div class="user-name" @click="toUserInfo(item.user_id)">
                                {{item.user_name}}
                            </div>
                            <div class="user-spk" v-if="item.type == 2">
                                <div class="user-spk2" v-if="item.status ==1">
                                    申请link成为连接者
                                </div>
                                <div class="user-spk2" v-else-if="item.status == 2">
                                    成为link,开始互动吧！
                                </div>
                                <div class="user-spk2" v-else>
                                    不能成为连接者，很抱歉！
                                </div>
                                <span>{{item.create_time}}</span>
                            </div>
                            <div class="user-spk" @click="toSeeinterflow(key)" v-else>
                                <div class="user-spk2">
                                    Make Highlight 你的事物
                                </div>
                                <span>{{item.create_time}}</span>
                            </div>
                        </div>
                    </div>

                    <div class="list-right">
                        <div v-if="item.type == 2 && item.status == 1" class="audit-body">
                            <div class="audit-yes" @click="onAudit(key,2)">同意</div>
                            <div class="audit-no" @click="onAudit(key,3)">拒绝</div>
                        </div>

                        <div @click="toSeeinterflow(key)" v-else-if="item.type == 1 && item.dynamic_type!= 1">
                            <img :src="item.dynamic_img_url" alt="">
                        </div>

                        <div @click="toSeeinterflow(key)" class="dynamic-content" v-else-if="item.type == 1 && item.dynamic_type== 1">
                            {{item.dynamic_content}}
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
                page:1,
                //page_num:this.common.pageNum(),
                page_num:9,
                loading: false,
                loadingType:0,//0=可以加载 1=加载中 2=已加载完毕
                list:[]
            };
        },
        created() {
            this.getList();
            window.addEventListener("scroll", this.onScroll);
        },
        //方法定义
        methods: {
            toUserInfo(id){
              this.$router.push({
                  path:'/userInfo',
                  query:{
                      id:id
                  }
              })
            },
            //去看全部
            toSeeinterflow(key){
                let _this=this;
                _this.onInteract(key);
                let id=_this.list[key].id;
                this.$router.push({
                    path:'/seeinterflow',
                    query:{
                        id:id
                    }
                });
            },
            //点击记录
            onInteract(key){
              let _this=this;
              _this.common.request('api/interact/onClick',{id:_this.list[key].id},function (res) {},'post');
            },
            //审核linke
            onAudit(key,status){
                let _this=this;
                let data={
                    id:_this.list[key].id,
                    status:status
                };
                _this.common.request('api/userLinker/audit',data,function (res) {
                    if(res.status == 200){
                        _this.$message({
                            message: res.message,
                            type: 'success',
                            duration: 1500,
                            center: true,
                            onClose:function (res) {
                            }
                        });
                        _this.list[key]['status']=status;
                    }
                },'post');
            },
            //获取互动列表
            getList(){
                let _this=this;
                _this.page = 1;
                let data={
                    page:_this.page,
                    page_num:_this.page_num
                };
                _this.common.request('api/interact',data,function (res) {
                    if(res.status == 200){
                        _this.list=res.data.list;
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
                        page_num:_this.page_num
                    };
                    _this.common.request('api/interact',data,function (res) {
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