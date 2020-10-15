import request from '../../utils/request.js';
import indexDatas from '../../utils/index.json';
import {CHANGEINDEXDATASMUTATION} from '../mutation-type.js';
const state = {
	initData:"我是初始数据",
	indexDatas:{}
}

const mutations = {
	//回调函数的定义
	// 1.我定义的函数
	// 2.我没调用过
	// 3.他执行了
	[CHANGEINDEXDATASMUTATION](state,indexDatas){
		// console.log(state,indexDatas,num)
		state.indexDatas=indexDatas;
	},
	// a(){
	// 	console.log('我是甲注册的mutation-a')
	// },
	// .....1000行,
	// a(){
	// 	console.log('我是乙注册的mutation-a')
	// }
}

const actions = {
	async getIndexDatas({commit}){
		let result=await request('/getIndexDatas');
		let data;
		if(result){
			data=result.data;
		}else{
			data=indexDatas;
		}
		console.log('result1',result)
		// changeIndexDatasMutation()
		commit(CHANGEINDEXDATASMUTATION,data)
	}
}

const getters = {
	
}


export default {
	state,
	mutations,
	actions,
	getters
}