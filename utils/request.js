//封装函数的思想
// 保留固定部分,提取动态传入的部分
//封装组件
//固定部分:template+style
// 动态部分:数据->props

//封装函数
//固定部分:重复的代码片段
//动态部分:所需的数据,需要外部传入
import config from './config.js';
export default function(url,data={},method="GET"){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:config.mpHost + url,
			data,
			method,
			success(res) {
				console.log(res.data)
				// result=res.data;
				resolve(res.data)
			},
			fail(error) {
				console.log(error)
				resolve(false)
			}
		})
	})
}