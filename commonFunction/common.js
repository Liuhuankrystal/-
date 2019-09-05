import axios from 'axios'
import route from '../src/router/index.js'
import {
    Message,
    MessageBox,
} from 'element-ui'


let apiUrl='https://demo.chuanyufs.com/woshuoxia/public/index.php/';
let pageNum=15;
export default{

    /**
     * get方式请求数据
     * @param url
     * @param data
     * @param callback
     */
    request:function(url,data,callback,method){
        let _this=this;
        method = method || 'get';
        axios({//格式a
            method:method,
            url:apiUrl+url,
            headers:{'user-token':localStorage.getItem('_token')},
            params: data,//参数
        }).then(function(resp){
            let data = resp.data;
            //用户信息失效
            if(data.status == 440 && localStorage.getItem('user_get')){
                localStorage.setItem('user_get',false);
                Message({
                    message: data.message,
                    type: 'warning',
                    duration: 2500,
                    center: true,
                    onClose:function (res) {
                        _this.loginOut();
                    }
                });
                return;
            }

            if(data.status ==400){
                Message({
                    message: data.message,
                    type: 'warning',
                    duration: 2500,
                    center: true
                });
                return;
            }
            localStorage.setItem('user_get',true);
            return callback(data);
        }).catch(resp => {
            console.log(resp);
            Message({
                message: '网络请求失败，请稍后重试',
                type: 'error',
                duration: 2500,
                center: true
            });
            console.log('请求失败：'+resp.status+','+resp.statusText);
        });
    },
    /**
     * 上传文件
     * @param data
     */
    requestUp:function(data,callback){
        let _this=this;
        axios({//格式a
            method:'post',
            url:_this.uploadUrl(),
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data: data,//参数
        }).then(function(resp){
            let data = resp.data;
            if(data.status != 1){
                Message({
                    message: '请选择图片',
                    type: 'error',
                    duration: 2500,
                    center: true
                });
                return;
            }
            return callback(data);
        }).catch(resp => {
            console.log(resp);
            Message({
                message: '网络请求失败，请稍后重试',
                type: 'error',
                duration: 2500,
                center: true
            });
            console.log('请求失败：'+resp.status+','+resp.statusText);
        });
    },
    //是否登陆
    isLogin:function(){
        if(localStorage.getItem('_token')){
            return true;
        }else {
            return false;
        }
    },
    //退出登陆需要确认
    loginOutSure(){
        let _this=this;
        MessageBox.confirm(
            '是否退出该账户?',
            '确定登出', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }
        ).then(() => {
            Message({
                message: '登出成功',
                type: 'success',
                duration: 1500,
                center: true,
                onClose:function (res) {
                    _this.loginOut();
                }
            });
        }).catch(() => {
            console.log('取消登出');
        });
    },
    //退出登陆
    loginOut:function () {
        localStorage.removeItem('_token');//清除缓存
        localStorage.removeItem('userInfo');//清除缓存
        route.push('/')
    },
    //分页条数
    pageNum:function () {
        return pageNum;
    },
    //上传文件路径
    uploadUrl:function () {
        return apiUrl+'file/upload-img';
    },
    //打开远程链接
    openUrl:function (url) {
        window.open(url)
    }

}