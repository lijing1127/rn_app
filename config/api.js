let host = "http://ybhm.ybyt.cc/";


const API_CONFIG = {
	baseUri: host,
	user_info: 'user/user_info', //用户信息
	wechat_user_info: 'user/wechat_user_info', //微信用户信息
	health_record: 'user/health_record', //健康档案

	sort_product: 'shop_mall/sort_product', //分类产品
	product_id: 'shop_mall/product', //产品详情
	all_product: 'shop_mall/all_product', //全部商品
	activity_id: 'shop_mall/activity_product', //活动产品

	// auth: 'auth', //用户登录；
	// sliderImage: 'scroll_the_picture', //轮播图;
	// allWork: 'work/all_work', //服务中心(工作站);
};

export default API_CONFIG;