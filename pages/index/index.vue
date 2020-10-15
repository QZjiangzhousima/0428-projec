<template>
	<view id="indexContainer">
		<!-- 头部 -->
		<view class="header">
			<image class="logo" src="../../static/images/logo.png" mode=""></image>
			<view class="search">
				<view class="iconfont icon-sousuo"></view>
				<input type="text" placeholder="搜索商品" placeholder-class="placeholder"/>
			</view>
			<button>七月</button>
		</view>
		
		<!-- 导航条 -->
		<scroll-view 
		scroll-x="true" 
		class="navScroll" 
		enable-flex="true" 
		v-if="indexDatas.kingKongModule">
			<view class="navItem" :class="navIndex===-1?'active':''"
			@click="changeNavIndex(-1)">推荐</view>
			<view class="navItem" 
			:class="navIndex===index?'active':''"
			v-for="(item,index) in indexDatas.kingKongModule.kingKongList"
			:key="index"
			@click="changeNavIndex(index)"
			>{{item.text}}</view>
		</scroll-view>
		
		<!-- 内容区域 -->
		<scroll-view scroll-y="true" class="content">
			<Recommend v-if="navIndex===-1" />
			<CateList :navIndex="navIndex" v-else/>
		</scroll-view>
	</view>
</template>

<script>
	import {mapState} from 'vuex';
	import Recommend from '../../components/recommend/recommend.vue';
	import CateList from '../../components/cateList/cateList.vue';
	export default {
		data() {
			return {
				navIndex:-1
			}
		},
		// 小程序中 onLoad -> 页面加载
		// Vue中	mounted	->	页面挂载完成
		// 总结:在uniapp中小程序和Vue的生命周期函数都可以使用
		// 		无论是在uniapp还是mpvue,都是推荐使用Vue的生命周期函数
		// onLoad(){
		// 	console.log('onLoad')
		// },
		mounted(){
			console.log('initData',this.$store.state.home.initData)
			// console.log('mounted')
			// console.log('result',result)
			// 1.dispatch
			// 2.mapActions
			this.$store.dispatch('getIndexDatas');
		},
		methods:{
			changeNavIndex(index){
				this.navIndex=index;
			}
			
		},
		computed:{
			// ...mapState(["indexDatas"])
			...mapState({
				indexDatas:state=>state.home.indexDatas
			})
		},
		components:{
			Recommend,
			CateList
		}
	}
</script>

<style lang="stylus">
#indexContainer
	.header
		display flex
		align-items center
		margin-top 20upx
		.logo
			width 116upx
			height 40upx
			margin 0 20upx
		.search
			position relative
			height 60upx
			background-color #eee
			border-radius 10upx
			.iconfont
				position absolute
				left 20upx
				top 25%
			input
				height 100%
				padding-left 70upx
				.placeholder
					text-align center
					font-size 24upx
					text-indent -60upx
		button
			width 129upx
			height 60upx
			font-size 24upx
			color red
			margin 0 20upx
	.navScroll
		height 80upx
		white-space nowrap
		.navItem
			display inline-block
			width 140upx
			height 80upx
			font-size 28upx
			text-align center
			line-height 80upx
			box-sizing border-box
			margin 0 10upx
			&.active
				border-bottom 1upx solid red
	.content
		height calc(100vh - 160upx)
</style>
