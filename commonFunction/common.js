import axios from 'axios'

let apiUrl='https://demo.chuanyufs.com/woshuoxia/public/index.php/';
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
            if(data.status == 440){
                _this.loginOut();
                return;
            }
            return callback(data);
        }).catch(resp => {
            console.log('请求失败：'+resp.status+','+resp.statusText);
        });
    },

    loginOut:function () {
        //清除缓存
        console.log('out');
    }

}