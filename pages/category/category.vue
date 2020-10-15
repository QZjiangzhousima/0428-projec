<template>
	<view class="categoryContainer">
		<view class="header">
			<view class="search">
				搜索商品
			</view>
		</view>
		<view class="content">
			<view class="leftContainer">
				<scroll-view scroll-y="true" class="navScroll">
					<view class="navItem" 
					:class="navId===item.id?'active':''" 
					@click="changeNavIndex(item.id)" 
					v-for="item in categoryDatas" 
					:key="item.id">{{item.name}}</view>
				</scroll-view>
			</view>
			<view class="rightContainer">
				<scroll-view scroll-y="true" class="contentScroll">
					<view class="scrollHeader">
						<image class="headerImg" :src="categoryObj.imgUrl" mode=""></image>
					</view>
					<view class="contentItem" v-for="item in categoryObj.subCateList" :key="item.id">
						<image :src="item.wapBannerUrl" mode=""></image>
						<text>{{item.name}}</text>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import request from '../../utils/request.js';
	export default {
		data() {
			return {
				categoryDatas:[],
				navId:null
			};
		},
		async mounted(){
			let result = await request('/getCategoryDatas');
			this.categoryDatas=result.data;
			this.navId=this.categoryDatas[0].id;
		},
		methods:{
			changeNavIndex(id){
				this.navId=id;
			}
		},
		computed:{
			categoryObj(){
				// find查询  filter过滤
				return this.categoryDatas.find((item,index)=>{
					return item.id===this.navId
				})
			}
		}
	}
</script>

<style lang="stylus">
.categoryContainer
	.header
		border-bottom 2upx solid #eee
		padding 10upx 0
		.search
			width  704upx
			height 60upx
			background-color #eee
			font-size 24upx
			text-align center
			line-height 60upx
			border-radius 10upx
			margin 0 auto
	.content
		height calc(100vh - 82upx)
		display flex
		.leftContainer
			width 20%
			height 100%
			border-right 1upx solid #eee
			.navScroll
				height 100%
				.navItem
					position relative
					font-size 28upx
					width 148upx
					height 80upx
					text-align center
					line-height 80upx
					&.active
						&::after
							content ""
							position absolute
							left 4upx
							top 10upx
							height 60upx
							width 2upx
							background-color red
		.rightContainer
			width 80%
			height 100%
			background-color white
			.contentScroll
				width 100%
				height 100%
				.scrollHeader
					width 100%
					.headerImg
						display block
						width 520upx
						height 190upx
						margin 20upx auto
				.contentItem
					display inline-flex
					flex-direction column
					align-items center
					width 33.333% 
					image
						width 160upx
						height 144upx
					text
						font-size 26upx
</style>
