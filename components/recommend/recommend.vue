<template>
	<view class="recommendContainer">
		
		<!-- 轮播图区域 -->
		<swiper class="bannerSwiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item class="bannerItem">
				<image src="https://yanxuan.nosdn.127.net/704515354b05480b4f6ef5ccd29c5778.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
			</swiper-item>
			<swiper-item class="bannerItem">
				<image src="https://yanxuan.nosdn.127.net/43166261d4a7bba00b94739e71f75afb.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
			</swiper-item>
			<swiper-item class="bannerItem">
				<image src="https://yanxuan.nosdn.127.net/4b0e7635a97f1c3a93dbf52c01c331dc.jpeg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
			</swiper-item>
		</swiper>
		
		<!-- policyDescList区域 -->
		<view class="policyDescList">
			<view class="policyItem" v-for="(item,index) in indexDatas.policyDescList" :key="index">
				<image :src="item.icon" mode=""></image>
				<text>{{item.desc}}</text>
			</view>
		</view>
		
		<!-- kingKongList区域 -->
		<view class="kingKongList" v-if="indexDatas.kingKongModule">
			<view class="kingKongItem" v-for="(item,index) in indexDatas.kingKongModule.kingKongList" :key="index">
				<image :src="item.picUrl" mode=""></image>
				<text>{{item.text}}</text>
			</view>
		</view>
		
		<!-- Categorys区域 -->
		<Categorys :categorys="categorys"  v-for="(categorys,index) in indexDatas.categoryModule" :key="index"/>
	</view>
</template>

<script>
	import {mapState} from 'vuex';
	import Categorys from '../categorys/categorys.vue';
	export default {
		data(){
			return {
				
			}
		},
		computed:{
			...mapState({
				indexDatas:state=>state.home.indexDatas
			})
		},
		components:{
			Categorys
		}
	}
</script>

<style lang="stylus">
.recommendContainer
	.bannerSwiper
		height 350upx
		.bannerItem
			height 100%
			image
				width 100%
				height 100%
	.policyDescList
		display flex
		justify-content space-around
		.policyItem
			image
				width 32upx
				height 32upx
				vertical-align middle
			text 
				font-size 24upx
				vertical-align middle
	.kingKongList
		display flex
		flex-wrap wrap
		.kingKongItem
			display flex
			flex-direction column
			// align-content 侧轴块对其方式,必须多行
			// align-items 侧轴行对齐方式
			align-items center
			width 20%
			image
				width 110upx
				height 110upx
			text
				font-size 24upx
</style>
