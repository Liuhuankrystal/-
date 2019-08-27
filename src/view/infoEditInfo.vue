<template>
    <div>
        <Topheader :keyword="keyword"></Topheader>
        <div class="w1100">
            <div class="info-body">

                <!--头像信息-->
                <div class="head-body">
                    <div class="head-img-body">
                        <div class="head-img">
                        <img  src="../../static/img/head.png" alt="">
                        </div>
                        <i class="el-icon-camera-solid"></i>                    </div>
                    <div class="head-info">
                        <div class="title">Bukin</div>
                        <div class="head-count">
                            <span>1,266 Post</span>
                            <span>1,266 Linkers</span>
                            <span>1,266 Followers</span>
                        </div>
                    </div>
                </div>

                <!--基本信息-->
                <div class="jb-info-body">
                    <div class="jb-title">
                        <div class="title">个人基本</div>
                        <div class="edit-btn">编辑</div>
                    </div>
                    <div class="jb-spk">
                        说明居住城市、真实姓名、个人网站、成就荣耀；
                    </div>
                    <div class="jb-list-body">
                        <img src="../../static/img/logo.png" alt="">
                        <div>Live in 四川·成都 from China</div>
                    </div>
                    <div class="jb-list-body">
                        <img src="../../static/img/logo.png" alt="">
                        <div>Registration time in 2019年07月28日  10:28AM</div>
                    </div>
                    <div class="jb-list-body">
                        <img src="../../static/img/logo.png" alt="">
                        <div>www.weibo.com can understand you.</div>
                    </div>
                    <div class="jb-list-body">
                        <img src="../../static/img/logo.png" alt="">
                        <div>Your achievement is 创建Woshuoxia</div>
                    </div>
                    <div class="jb-list-body">
                        <img src="../../static/img/logo.png" alt="">
                        <div>You name is Bukin</div>
                    </div>
                </div>

                <!--安全已健康-->
                <div class="jb-info-body">
                    <div class="jb-title">
                        <div class="title">安全与健康</div>
                        <div class="edit-btn">编辑</div>
                    </div>
                    <div class="jb-list-body">
                        <img src="../../static/img/logo.png" alt="">
                        <div class="title-img">账户</div>
                    </div>
                    <div class="an-jk-list">
                        <div class="title">邮箱</div>
                        <div class="info">hcy.php@qq.com</div>
                    </div>
                    <div class="an-jk-list">
                        <div class="title">密码</div>
                        <div class="info">···············</div>
                    </div>
                </div>

                <!--数据-->
                <div class="jb-info-body">
                    <div class="jb-list-body">
                        <img src="../../static/img/logo.png" alt="">
                        <div class="title-img">数据</div>
                    </div>
                    <div class="an-jk-list">
                        <div class="title">研究机构</div>
                        <div class="info">未开放</div>
                    </div>
                    <div class="an-jk-list">
                        <div class="title">商业APP</div>
                        <div class="info">未开放</div>
                    </div>
                    <div class="an-jk-list">
                        <div class="title">公益APP</div>
                        <div class="info">未开放</div>
                    </div>
                    <div class="an-jk-list">
                        <div class="title">设备</div>
                        <div class="info">未开放</div>
                    </div>
                    <div class="an-jk-list">
                        <div class="title">政府部门</div>
                        <div class="info">未开放</div>
                    </div>
                    <div class="an-jk-list">
                        <div class="title">组织机构</div>
                        <div class="info">未开放</div>
                    </div>
                    <div class="an-jk-list">
                        <div class="title">个人团体</div>
                        <div class="info">未开放</div>
                    </div>
                </div>

                <!--向访问者展示-->
                <div class="jb-info-body">
                    <div class="jb-title">
                        <div class="title">向访问者展示</div>
                        <div class="edit-btn">编辑</div>
                    </div>

                    <div class="jb-list-body">
                        <img src="../../static/img/logo.png" alt="">
                        <div class="title-img">职业/研究领域</div>
                        <div class="title-spk">用于推荐引用和搜索附言的展示</div>
                    </div>
                    <div class="show-content">
                        Since 2007 互联网产品经理执行
                    </div>

                    <div class="jb-list-body">
                        <img src="../../static/img/logo.png" alt="">
                        <div class="title-img">技能快</div>
                        <div class="title-spk">用于推荐引用</div>
                    </div>
                    <div class="show-content">
                        前端Div+Css'2013、原型工具axure'2008、UI'2010、心理学'2010、客户端'2016、工程结构'2009
                    </div>

                    <div class="jb-list-body">
                        <img src="../../static/img/logo.png" alt="">
                        <div class="title-img">商业服务</div>
                        <div class="title-spk">用于搜索副标的展示</div>
                    </div>
                    <div class="show-content">
                        Since 2007 互联网产品经理执行
                    </div>

                    <div class="jb-list-body">
                        <img src="../../static/img/logo.png" alt="">
                        <div class="title-img">介绍语</div>
                        <div class="title-spk">用于个人主页和搜索的展示</div>
                    </div>
                    <div class="show-content">
                        Instagram 是捕捉和分享世界精彩瞬间的简单方式。只需关注，即可借他人之眼来捕捉全球的精彩瞬间，并从中发现趣味。
                        超过 10 亿用户选择了 Instagram，速速加入他们，用照片和视频拍下不一样的每一天，用影像传达个性符号吧！
                    </div>

                    <div class="jb-list-body">
                        <img src="../../static/img/logo.png" alt="">
                        <div class="title-img">招呼语</div>
                        <div class="title-spk">用于推荐引用</div>
                    </div>
                    <div class="show-content">
                        Hi , I am Zhangboqing , Call me Bukin.
                    </div>

                </div>

                <!--关键词-->
                <div class="jb-info-body keyword-body">
                    <div class="jb-title">
                        <div class="title">索引种子</div>
                        <div class="edit-btn">编辑</div>
                    </div>

                    <div class="jb-list-body">
                        <img src="../../static/img/logo.png" alt="">
                        <div class="title-img">关键词</div>
                        <div class="title-spk">用于woshuoxia搜索的蜘蛛爬抓</div>
                    </div>
                    <div class="show-content">
                        K*产品设计 K*互联网业务设计和品牌规划 K*Woshuoxia产品设计和规划 K*新产品开发和增长服务
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import Topheader from "../components/header"; //上传图片
    export default {
        name: "infoEditInfo",
        components:{
            Topheader
        },
        data() {
            return {
                'keyword': ''
            };
        },
        created() {

        },
        //方法定义
        methods: {}
    }
</script>

<style scoped lang='less' rel="stylesheet/less">
    @import "../assets/css/index.less";

    .info-body{
        background-color: white;
        margin-top: 80px;
        margin-bottom: 80px;
        .head-body{
            display: flex;
            justify-content: flex-start;
            border-bottom: 1px solid #DBDBDB;
            height: 115px;
            .head-img-body{
                position: relative;
                .head-img{
                     .imgNoCut(160px;153px);                   
                    top: -66px;
                    left: 20px;
                }
                i{
                    width:25px;
                    height:18px;
                    position: absolute;
                    right: -10px;
                    bottom: 45px;
                    color: white;
                    font-size: 26px;
                }
            }
            .head-info{
                margin-left: 40px;
                margin-top: 20px;
                .title{
                    font-size:32px;
                    font-family:Microsoft YaHei;
                    font-weight:600;
                    color:rgba(87,87,87,1);
                    line-height:19px;
                }
                .head-count{
                    font-size:18px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(127,127,127,1);
                    line-height:54px;
                    span{
                        margin-left: 30px;
                    }
                    span:first-child{
                        margin-left: 0;
                    }
                }
            }
        }

        .jb-info-body{
            margin-top: 20px;
            margin-left: 20px;
            border-bottom: 1px solid #DBDBDB;
            .jb-title{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                line-height: 40px;
                height: 40px;
                .title{
                    font-size:16px;
                    font-family:Microsoft YaHei;
                    font-weight:600;
                    color:rgba(28,28,28,1);
                    line-height:23px;
                }
                .edit-btn{
                    margin-left: 10px;
                    font-size:16px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(56,137,193,1);
                    line-height:23px;
                }
            }
            .jb-spk{
                font-size:14px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(175,175,175,1);
                line-height:23px;
            }
            .jb-list-body{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                height: 34px;
                line-height: 34px;
                img{
                    width:20px;
                    height:20px;
                }
                div{
                    font-size: 14px;
                    margin-left: 10px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(77,77,77,1);
                    line-height:18px;
                }
                .title-img{
                    font-weight:600;
                    color:rgba(23,23,23,1);
                    line-height:23px;
                }
                .title-spk{
                    font-size:12px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(175,175,175,1);
                    line-height:23px;
                }
            }
            .an-jk-list{
                display: flex;
                justify-content: flex-start;
                margin-left: 30px;
                .title{
                    font-size:16px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(29,29,29,1);
                    line-height:23px;
                    width: 80px;
                }
                .info{
                    font-size:14px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(77,77,77,1);
                    line-height:23px;
                }
            }

            .show-content{
                font-size:16px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(77,77,77,1);
                line-height:20px;
                margin: 10px 0 15px 30px;
            }
        }
        .keyword-body{
            border-bottom: 0;
            padding-bottom: 20px;
        }
    }

</style>