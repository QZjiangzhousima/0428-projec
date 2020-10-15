<template>
	<view class="categorysContainer">
		<image class="titleImg" :src="categorys.titlePicUrl" mode=""></image>
		<scroll-view scroll-x="true" class="itemList">
			<view class="item" v-for="scrollItem in categorys.itemList" :key="scrollItem.id">
				<image :src="scrollItem.showPicUrl" mode=""></image>
				<text>{{scrollItem.name}}</text>
			</view>
			<view class="item more">
				查看更多>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		props:{
			categorys:Object
		}
	}
</script>

<style lang="stylus">
	.categorysContainer
		margin-top 20upx
		.titleImg
			width 100%
			height 370upx
		.itemList
			white-space nowrap
			.item
				display inline-flex
				flex-direction column
				width 200upx
				margin 10upx 20upx
				&.more
					font-size 24upx
					width 200upx
					height 200upx
					background-color #eee
					text-align center
					line-height 200upx
					vertical-align top
				image
					width 200upx
					height 200upx
					background-color #eee
				text
					display -webkit-box
					-webkit-line-clamp 2
					-webkit-box-orient vertical
					height 64upx
					overflow hidden
					white-space pre-wrap
					font-size 24upx
</style>
