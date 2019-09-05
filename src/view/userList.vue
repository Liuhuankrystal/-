<template>
    <div>
        <Topheader :keyword="keyword"></Topheader>
        <div class="w1100">
            <div class="num-body"> {{keyword}} 共有 {{userNum}} 条</div>
            <div class="list-body" v-for="(vo,key) in list" :key="vo.id" @click="toUserInfo(vo.id)">
                <div class="title">{{vo.name}}</div>
                <div class="user-spk">{{vo.keyword}}</div>
                <div class="user-keyword">
                    {{vo.swfu}} - {{vo.swfu_year}}
                </div>
                <div class="user-keyword">
                    {{vo.zyly}} - {{vo.zyly_year}}
                </div>
                <div class="user-count">
                    <img :src="vo.head_url" alt="">
                    <div>
                        <span>{{vo.area_text}}</span>
                        <span>{{vo.posts}} Post</span>
                        <span>· {{vo.highlight_num}}次高亮时刻</span>
                    </div>
                </div>
            </div>

            <!--分页-->
            <div class="page-body">
                <div class="up-page" v-if="page > 1" @click="upPage()">上一页</div>

                <div class="num-page" @click="getFyList(item)" :class="item == page ? 'act' : ''" v-for="item in pageNum" :key="item">
                    {{item}}
                </div>

                <div class="next-page" v-if="page < pageNum" @click="nextPage()">
                    下一页
                </div>

            </div>
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
                keyword: '',
                userNum:0,
                page:1,
                page_num:this.common.pageNum(),
                list:[]
            };
        },
        watch:{
            // 方法1
            '$route' (to, from) { //监听路由是否变化
                //获取文章数据
                this.keyword=this.$route.query.keyword;//
                this.getList();
            }
        },
        computed:{
            pageNum:function () {
              return Math.ceil(this.userNum/this.page_num);
            }
        },
        created() {
            this.keyword=this.$route.query.keyword;//
            this.getList();
        },
        mounted() {
            document
                .querySelector("body")
                .setAttribute("style", "background-color:#fff");
        },
        //方法定义
        methods: {
            //去用户信息
            toUserInfo(id){
                let _this=this;

                _this.common.request('api/user/onClickKeyword',{id:id},function (res) {},'post');//点击用户
                _this.$router.push({
                    path:'/userInfo',
                    query:{
                        id:id
                    }
                });
            },
            //获取list
            getList(){
                let _this=this;
                _this.page=1;
                let data={
                    page:_this.page,
                    page_num:_this.page_num,
                    keyword:_this.keyword
                };
                _this.common.request('api/user',data,function (res) {
                    if(res.status == 200){
                        _this.list=res.data.list;
                        _this.userNum=res.data.num;
                    }
                })
            },
            upPage(){
              let _this=this;
              if(_this.page>1){
                  _this.page--;
                  _this.getFyList(_this.page)
              }
            },
            nextPage(){
                let _this=this;
                if(_this.page < _this.pageNum){
                    _this.page++;
                    _this.getFyList(_this.page)
                }
            },
            //分页
            getFyList(page){
                let _this=this;
                _this.page=page;
                let data={
                    page:_this.page,
                    page_num:_this.page_num,
                    keyword:_this.keyword
                };
                _this.common.request('api/user',data,function (res) {
                    if(res.status == 200){
                        _this.list=res.data.list;
                        _this.userNum=res.data.num;
                    }
                })
            }
        }
    }
</script>

<style scoped lang='less'  rel="stylesheet/less">
    @import "../assets/css/index.less";

    .num-body{
        font-size:14px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(113,113,113,1);
        line-height:54px;
    }

    .list-body:hover{
    }
    .list-body{
        padding: 15px 0;
        cursor: pointer;
        .title{
            color: #227CBB;
            font-size: 18px;
            font-weight: 600;
        }
        .user-spk{
            font-size:16px;
            font-family:Arial;
            font-weight:bold;
            color:rgba(77,77,77,1);
            line-height:24px;
        }
        .user-keyword{
            width: 600px;
            font-size:14px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(28,28,28,1);
            line-height:24px;
        }
        .user-count{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            img{
                width: 16px;
                height: 16px;
                border-radius: 50%;
            }
            span{
                margin-left: 8px;
                color: #7F7F7F;
                font-size: 14px;
            }
        }
    }

    .page-body{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 20px;
        .up-page{
            font-size:14px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(127,127,127,1);
            line-height:22px;
            cursor: pointer;

        }
        .num-page{
            width:28px;
            height:28px;
            line-height: 28px;
            background:rgba(242,240,233,1);
            border-radius:50%;
            text-align: center;
            color: #B1B1B1;
            margin-left: 10px;
            cursor: pointer;
        }
        .num-page:hover{
            background:rgba(242,240,233,0.7);
        }
        .next-page{
            font-size:14px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(127,127,127,1);
            line-height:22px;
            margin-left: 10px;
            cursor: pointer;
        }
        .act{
            font-size:16px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(65,65,65,1);
            background:rgba(242,240,233,0.5);
        }
    }


</style>